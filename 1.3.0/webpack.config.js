const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SvgStorePlugin = require('external-svg-sprite-loader');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(svg)$/,
                use: [{
                    loader: SvgStorePlugin.loader,
                    options: {
                        iconName: '[name]',
                        name: 'svg/global.[hash].svg',
                    },
                }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new SvgStorePlugin(),
    ],
};
