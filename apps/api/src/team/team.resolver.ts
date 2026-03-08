import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TeamService } from './team.service'
import { CreateOneTeamArgs, DeleteOneTeamArgs, Team } from '../../@generated/types/team'

@Resolver()
export class TeamResolver {
    constructor(private readonly teamService: TeamService) {}

    @Query(() => [Team])
    teamsByCountry(@Args('countryId', { type: () => String }) countryId: string) {
        return this.teamService.findTeamsByCountry(countryId)
    }

    @Mutation(() => Team)
    createTeam(@Args() createOneTeamArgs: CreateOneTeamArgs) {
        return this.teamService.create(createOneTeamArgs)
    }

    @Mutation(() => Team)
    deleteTeam(@Args() deleteOneTeamArgs: DeleteOneTeamArgs) {
        return this.teamService.delete(deleteOneTeamArgs)
    }
}
