const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        stats:{errorDetails:true},
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
        resolve: {
            extensions: ['...', '.svg'],
            modules: [
                'node_modules',
                path.resolve(__dirname, 'src'),
            ],
        },
    },
];
