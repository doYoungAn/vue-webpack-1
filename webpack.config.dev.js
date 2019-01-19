const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        port: 8080,
        historyApiFallBack: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
});