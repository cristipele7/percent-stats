import { Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import { CreateOneLeagueArgs, DeleteOneLeagueArgs, League } from '../../@generated/types/league'

@Injectable()
export class LeagueService {
    findLeaguesByCountry(countryId: string): Promise<League[]> {
        return prisma.league.findMany({
            where: {
                countryId,
            },
        })
    }

    create(createOneLeagueArgs: CreateOneLeagueArgs): Promise<League> {
        return prisma.league.create(createOneLeagueArgs)
    }

    delete(deleteOneLeagueArgs: DeleteOneLeagueArgs): Promise<League> {
        return prisma.league.delete(deleteOneLeagueArgs)
    }
}
