import { Module } from '@nestjs/common'
import { MatchService } from './match.service'
import { MatchResolver } from './match.resolver'
import { MatchJob } from './match.job'

@Module({
    providers: [MatchResolver, MatchService, MatchJob],
})
export class MatchModule {}
