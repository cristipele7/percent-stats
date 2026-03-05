const { withNxMetro } = require('@nx/react-native')
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const customConfig = {
    cacheVersion: 'ui',
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    resolver: {
        assetExts: assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
        // Add this resolver config:
        resolveRequest: (context, moduleName, platform) => {
            // Try default resolution first
            const defaultResolveResult = context.resolveRequest(context, moduleName, platform)

            if (defaultResolveResult) {
                return defaultResolveResult
            }

            // Handle NX workspace paths
            if (moduleName.startsWith('src/')) {
                return {
                    filePath: path.resolve(__dirname, moduleName),
                    type: 'sourceFile',
                }
            }

            return null
        },
    },
}

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
    extensions: [],
    // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
    watchFolders: [],
})
