/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly ENV: string
    readonly GQL_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
