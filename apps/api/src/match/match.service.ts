import { Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import { Match } from '../../@generated/types/match'

@Injectable()
export class MatchService {
    findMatchesByDate(date: string): Promise<Match[]> {
        const start = new Date(date)
        start.setHours(0, 0, 0, 0)

        const end = new Date(date)
        end.setHours(23, 59, 59, 999)

        return prisma.match.findMany({
            where: {
                date: {
                    gte: start,
                    lte: end,
                },
            },
            include: {
                homeTeam: true,
                awayTeam: true,
                league: true,
            },
        })
    }
}
