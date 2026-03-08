import { Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import { CreateOneTeamArgs, DeleteOneTeamArgs, Team } from '../../@generated/types/team'

@Injectable()
export class TeamService {
    findTeamsByCountry(countryId: string): Promise<Team[]> {
        return prisma.team.findMany({
            where: {
                countryId,
            },
        })
    }

    create(createOneTeamArgs: CreateOneTeamArgs): Promise<Team> {
        return prisma.team.create(createOneTeamArgs)
    }

    delete(deleteOneTeamArgs: DeleteOneTeamArgs): Promise<Team> {
        return prisma.team.delete(deleteOneTeamArgs)
    }
}
