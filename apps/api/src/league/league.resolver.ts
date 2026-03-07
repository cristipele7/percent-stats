import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LeagueService } from './league.service'
import { CreateOneLeagueArgs, DeleteOneLeagueArgs, League } from '../../@generated/types/league'

@Resolver()
export class LeagueResolver {
    constructor(private readonly leagueService: LeagueService) {}

    @Query(() => [League])
    leaguesByCountry(@Args('countryId', { type: () => String }) countryId: string) {
        return this.leagueService.findLeaguesByCountry(countryId)
    }

    @Mutation(() => League)
    createLeague(@Args() createOneLeagueArgs: CreateOneLeagueArgs) {
        return this.leagueService.create(createOneLeagueArgs)
    }

    @Mutation(() => League)
    deleteLeague(@Args() deleteOneLeagueArgs: DeleteOneLeagueArgs) {
        return this.leagueService.delete(deleteOneLeagueArgs)
    }
}
