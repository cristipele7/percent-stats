export const apiEnv: IApiEnv = {
    isProd: process.env.ENV === 'production',
    api: {
        port: Number(process.env.API_PORT),
    },
    db: {
        url: process.env.DATABASE_URL,
    },
}

export interface IApiEnv {
    isProd: boolean
    api: {
        port: number
    }
    db: {
        url: string | undefined
    }
}
