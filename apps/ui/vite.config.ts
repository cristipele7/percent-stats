import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import * as esbuild from 'esbuild'
import { readFileSync } from 'fs'
import * as path from 'path'

const extensions = [
    '.mjs',
    '.web.tsx',
    '.tsx',
    '.web.ts',
    '.ts',
    '.web.jsx',
    '.jsx',
    '.web.js',
    '.js',
    '.css',
    '.json',
]

const rollupPlugin = (matchers: RegExp[]) => ({
    name: 'js-in-jsx',
    load(id: string) {
        if (matchers.some((matcher) => matcher.test(id)) && id.endsWith('.js')) {
            const file = readFileSync(id, { encoding: 'utf-8' })
            return esbuild.transformSync(file, { loader: 'jsx', jsx: 'automatic' })
        }
    },
})

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/ui',
    define: {
        global: 'window',
        'import.meta.env.VITE_ENV': JSON.stringify(process.env.ENV),
        'import.meta.env.VITE_GQL_URL': JSON.stringify(process.env.GQL_URL),
    },
    resolve: {
        extensions,
        alias: {
            'react-native': 'react-native-web',
            'react-native-svg': 'react-native-svg-web',
            '@react-native/assets-registry/registry':
                'react-native-web/dist/modules/AssetRegistry/index',
            src: path.resolve(__dirname, './src'),
            api: path.resolve(__dirname, './api'),
            constants: path.resolve(__dirname, './constants'),
            interfaces: path.resolve(__dirname, './interfaces'),
            i18n: path.resolve(__dirname, './i18n'),
        },
    },
    build: {
        reportCompressedSize: true,
        commonjsOptions: { transformMixedEsModules: true },
        outDir: '../../dist/apps/ui/web',
        rollupOptions: {
            plugins: [rollupPlugin([/react-native-vector-icons/])],
        },
    },
    server: {
        port: 4200,
        host: 'localhost',
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
        },
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    optimizeDeps: {
        esbuildOptions: {
            resolveExtensions: extensions,
            jsx: 'automatic',
            loader: { '.js': 'jsx' },
        },
    },
    plugins: [react(), nxViteTsPaths()],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
})
