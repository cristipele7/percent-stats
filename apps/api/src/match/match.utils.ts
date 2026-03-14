import { MatchState } from '@prisma/client'
import { Match } from '../../@generated/types/match'
import prisma from '../../prisma'
import { LEAGUE_COUNTRY_BY_API_ID, LEAGUE_NAMES_BY_API_ID } from '../constants'
import { ApiFootballFixture, STATUS_MAP } from './match.job'
import dayjs from 'dayjs'
import axios from 'axios'
import { apiEnv } from '../../env-vars'

export function parseRound(round: string): number {
    const match = round.match(/\d+/)
    return match ? parseInt(match[0], 10) : 0
}

export async function getFixtures(params: Record<string, string>): Promise<ApiFootballFixture[]> {
    const response = await axios.get<{ response: ApiFootballFixture[] }>(
        'https://v3.football.api-sports.io/fixtures',
        {
            params,
            headers: {
                'x-apisports-key': apiEnv.footballApi.key,
            },
        },
    )

    return response.data.response
}

export async function upsertMatchFromFixture(item: ApiFootballFixture): Promise<Match> {
    const countryName = LEAGUE_COUNTRY_BY_API_ID[item.league.id] ?? item.league.country

    const country = await prisma.country.upsert({
        where: { name: countryName },
        create: { name: countryName },
        update: {},
    })

    const league = await prisma.league.upsert({
        where: { apiId: item.league.id },
        create: {
            apiId: item.league.id,
            name: LEAGUE_NAMES_BY_API_ID[item.league.id] ?? item.league.country,
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

    return prisma.match.upsert({
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
        include: {
            homeTeam: true,
            awayTeam: true,
            league: true,
        },
    })
}
