const path = require('path');
const webpack = require('webpack');

const bustBrowserCache = require('./webpack/bustBrowserCache');

module.exports = [
    {
        devServer: {
            historyApiFallback: {index: '/'},
            port: 9000,
            static: {
                directory: path.join(__dirname, 'web'),
            },
        },
        entry: {
            'index': './index.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ]
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        output: {
            clean: true,
            filename: '[name].js',
            path: path.resolve(__dirname, 'web/build'),
            publicPath: '/build/',
        },
        plugins: [
            {
                apply: bustBrowserCache,
            },
        ],
        resolve: {
            extensions: ['...', '.svg'],
            modules: [
                'node_modules',
                path.resolve(__dirname, 'src'),
            ],
        },
    },
];
