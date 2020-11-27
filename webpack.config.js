const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const electronConfig = {
    target: 'electron-main',
    entry: './src/electron/index.ts',
    module: {
        rules: [
            { test: /\.ts/, use: 'ts-loader' },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/electron/index.html' }
            ]
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname)
    },
}

const appConfig = {
    target: 'web',
    entry: './src/app/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.(ts|tsx|js|jsx)/, use: 'ts-loader' },
        ]
    },
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
}

module.exports = [electronConfig, appConfig];
