import { Args, Query, Resolver } from '@nestjs/graphql'
import { MatchService } from './match.service'
import { Match } from '../../@generated/types/match'

@Resolver()
export class MatchResolver {
    constructor(private readonly matchService: MatchService) {}

    @Query(() => [Match])
    matchesByDate(@Args('date', { type: () => String }) date: string) {
        return this.matchService.findMatchesByDate(date)
    }
}
