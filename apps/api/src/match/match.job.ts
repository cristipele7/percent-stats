import dayjs from 'dayjs'
import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import axios from 'axios'
import { MatchState } from '@prisma/client'
import { apiEnv } from '../../env-vars'
import prisma from '../../prisma'
import { INCLUDED_LEAGUES, LEAGUE_NAMES_BY_API_ID } from '../constants'
import { parseRound } from './match.utils'

export interface ApiFootballFixture {
    fixture: {
        id: number
        date: string
        status: {
            short: string
        }
    }
    league: {
        id: number
        name: string
        country: string
        round: string
    }
    teams: {
        home: { id: number; name: string }
        away: { id: number; name: string }
    }
    goals: {
        home: number | null
        away: number | null
    }
}

export const STATUS_MAP: Record<string, MatchState> = {
    NS: MatchState.NOT_STARTED,
    '1H': MatchState.FIRST_HALF,
    HT: MatchState.HALF_TIME,
    '2H': MatchState.SECOND_HALF,
    FT: MatchState.FULL_TIME,
}

@Injectable()
export class MatchJob {
    private readonly logger = new Logger(MatchJob.name)

    @Cron(CronExpression.EVERY_YEAR)
    async fetchDailyMatches() {
        this.logger.log('Fetching matches for today and tomorrow...')

        const dates = [dayjs(), dayjs().add(1, 'day')].map((d) => d.format('YYYY-MM-DD'))

        for (const date of dates) {
            await this.fetchMatchesForDate(date)
        }

        this.logger.log('Done fetching matches.')
    }

    private async fetchMatchesForDate(date: string) {
        const response = await axios.get<{ response: ApiFootballFixture[] }>(
            'https://v3.football.api-sports.io/fixtures',
            {
                params: { date },
                headers: {
                    'x-apisports-key': apiEnv.footballApi.key,
                },
            },
        )

        const fixtures = response.data.response.filter((item) =>
            INCLUDED_LEAGUES.includes(item.league.id),
        )

        for (const item of fixtures) {
            const country = await prisma.country.upsert({
                where: { name: item.league.country },
                create: { name: item.league.country },
                update: {},
            })

            const league = await prisma.league.upsert({
                where: { apiId: item.league.id },
                create: {
                    apiId: item.league.id,
                    name: LEAGUE_NAMES_BY_API_ID[item.league.id],
                    countryId: country.id,
                },
                update: {},
            })

            const homeTeam = await prisma.team.upsert({
                where: { apiId: item.teams.home.id },
                create: {
                    apiId: item.teams.home.id,
                    name: item.teams.home.name,
                    countryId: country.id,
                },
                update: {},
            })

            const awayTeam = await prisma.team.upsert({
                where: { apiId: item.teams.away.id },
                create: {
                    apiId: item.teams.away.id,
                    name: item.teams.away.name,
                    countryId: country.id,
                },
                update: {},
            })

            const state = STATUS_MAP[item.fixture.status.short] ?? MatchState.NOT_STARTED
            const round = parseRound(item.league.round)

            await prisma.match.upsert({
                where: { apiId: item.fixture.id },
                create: {
                    apiId: item.fixture.id,
                    date: dayjs(item.fixture.date).toDate(),
                    round,
                    state,
                    leagueId: league.id,
                    homeTeamId: homeTeam.id,
                    homeTeamGoals: item.goals.home ?? 0,
                    awayTeamId: awayTeam.id,
                    awayTeamGoals: item.goals.away ?? 0,
                },
                update: {
                    state,
                    homeTeamGoals: item.goals.home ?? 0,
                    awayTeamGoals: item.goals.away ?? 0,
                },
            })
        }

        this.logger.log(
            `Processed ${fixtures.length} fixtures for ${date} (filtered by included leagues)`,
        )
    }
}
