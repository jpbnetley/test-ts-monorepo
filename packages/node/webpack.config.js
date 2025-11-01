// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import webpack from 'webpack'

const config = webpack.config.getNormalizedWebpackOptions({
    entry: './src/index.ts',
    experiments: {
        outputModule: true
    },
    output: {
        filename: "index.mjs",
        path: path.resolve('dist'),
        publicPath: 'dist',
        clean: true,
        libraryTarget: "module",
        target: 'node',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(mts|ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.ts', '.jsx', '.js', '.mjs'],
    },
});

export default config
