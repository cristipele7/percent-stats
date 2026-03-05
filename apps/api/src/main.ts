/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import helmet from 'helmet'
import { apiEnv } from '../env-vars'

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

    app.use(
        helmet({
            contentSecurityPolicy: apiEnv.isProd,
        }),
    )
    app.enableCors()

    const port = apiEnv.api.port
    await app.listen(port)
    Logger.log(`🚀 Application is running on: http://localhost:${port}/graphiql`)
}

bootstrap()
