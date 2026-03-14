import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { MatchService } from './match.service'
import { Match } from '../../@generated/types/match'
import { ApiFootballFixtureType } from './match.types'

@Resolver()
export class MatchResolver {
    constructor(private readonly matchService: MatchService) {}

    @Query(() => [ApiFootballFixtureType])
    matchesByDateFromAPI(@Args('date', { type: () => String }) date: string) {
        return this.matchService.getMatchesByDateFromAPI(date)
    }

    @Query(() => [Match])
    allMatchesForTeams(
        @Args('homeTeamId', { type: () => String }) homeTeamId: string,
        @Args('awayTeamId', { type: () => String }) awayTeamId: string,
    ) {
        return this.matchService.findMany({
            where: {
                OR: [
                    {
                        homeTeamId: {
                            equals: homeTeamId,
                        },
                    },
                    {
                        awayTeamId: {
                            equals: homeTeamId,
                        },
                    },
                    {
                        homeTeamId: {
                            equals: awayTeamId,
                        },
                    },
                    {
                        awayTeamId: {
                            equals: awayTeamId,
                        },
                    },
                ],
            },
        })
    }

    @Query(() => Match)
    matchByApiId(@Args('apiId', { type: () => Number }) apiId: number) {
        return this.matchService.findOne({
            where: {
                apiId,
            },
        })
    }

    @Mutation(() => Match)
    createMatchFromAPI(
        @Args('apiId', { type: () => Number }) apiId: number,
        @Args('unsyncedTeamApiId', { type: () => Number, nullable: true })
        unsyncedTeamApiId?: number,
    ) {
        return this.matchService.createMatchFromAPI(apiId, unsyncedTeamApiId)
    }
}
