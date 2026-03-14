import { Injectable } from '@nestjs/common'
import { GraphQLError } from 'graphql'
import prisma from '../../prisma'
import { FindManyMatchArgs, FindUniqueMatchArgs, Match } from '../../@generated/types/match'
import axios from 'axios'
import dayjs from 'dayjs'
import { ApiFootballFixture } from './match.job'
import { apiEnv } from '../../env-vars'
import {
    HISTORY_START_SEASON,
    INCLUDED_LEAGUES,
    LEAGUE_COUNTRY_BY_API_ID,
    LEAGUE_NAMES_BY_API_ID,
} from '../constants'
import { getFixtures, upsertMatchFromFixture } from './match.utils'

@Injectable()
export class MatchService {
    async getMatchesByDateFromAPI(date: string): Promise<ApiFootballFixture[]> {
        const response = await axios.get<{ response: ApiFootballFixture[] }>(
            'https://v3.football.api-sports.io/fixtures',
            {
                params: { date },
                headers: {
                    'x-apisports-key': apiEnv.footballApi.key,
                },
            },
        )

        const fixtures = response.data.response
            .filter((item) => INCLUDED_LEAGUES.includes(item.league.id))
            .map((item) => ({
                ...item,
                league: {
                    ...item.league,
                    name: LEAGUE_NAMES_BY_API_ID[item.league.id] ?? '',
                    country: LEAGUE_COUNTRY_BY_API_ID[item.league.id] ?? '',
                },
            }))

        return fixtures
    }

    async findMany(findManyMatchArgs: FindManyMatchArgs): Promise<Match[]> {
        return prisma.match.findMany({
            ...findManyMatchArgs,
            include: {
                homeTeam: true,
                awayTeam: true,
                league: true,
            },
        })
    }

    async findOne(findUniqueMatchArgs: FindUniqueMatchArgs): Promise<Match> {
        const match = await prisma.match.findUnique({
            where: findUniqueMatchArgs.where,
            include: {
                homeTeam: true,
                awayTeam: true,
                league: true,
            },
        })

        if (!match) {
            throw new GraphQLError('Match not found', {
                extensions: { status: 17404 },
            })
        }

        return match
    }

    async createMatchFromAPI(apiId: number, unsyncedTeamApiId?: number): Promise<Match> {
        const fixtures = await getFixtures({ id: String(apiId) })
        const item = fixtures[0]

        if (!item) {
            throw new GraphQLError('Fixture not found', {
                extensions: { status: 17404 },
            })
        }

        const currentSeason = dayjs().year()
        const seasons = Array.from(
            { length: currentSeason - HISTORY_START_SEASON + 1 },
            (_, i) => HISTORY_START_SEASON + i,
        )

        const teamApiIds = unsyncedTeamApiId
            ? [unsyncedTeamApiId]
            : [item.teams.home.id, item.teams.away.id]

        for (const season of seasons) {
            const fixturesPerTeam = await Promise.all(
                teamApiIds.map((teamId) =>
                    getFixtures({ team: String(teamId), season: String(season) }),
                ),
            )
            const filtered = fixturesPerTeam
                .flat()
                .filter((f) => INCLUDED_LEAGUES.includes(f.league.id))
            for (const fixture of filtered) {
                await upsertMatchFromFixture(fixture)
            }
        }

        await prisma.team.updateMany({
            where: { apiId: { in: teamApiIds } },
            data: { synced: true },
        })

        return upsertMatchFromFixture(item)
    }
}
