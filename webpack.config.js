const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        entry: {
            index: './index.js',
        },
        externalsType: 'commonjs',
        externals: {
            'prop-types': 'prop-types',
            'react': 'react',
            'react-colorful': 'react-colorful',
            'react-dom': 'react-dom',
            'react-router-dom': 'react-router-dom',
            'zustand': 'zustand',
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
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/ui/',
            library: {
                type: 'commonjs-static',
            },
        },
        resolve: {
            extensions: ['...', '.svg'],
            modules: [
                'node_modules',
                __dirname,
                path.resolve(__dirname, 'src'),
            ],
        },
    },
];
