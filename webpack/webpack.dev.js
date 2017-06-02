'use strict';
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'source-map',

    devServer: {
        contentBase: 'dist',
        port: 4200,
        historyApiFallback: true
    },

    plugins: [new BundleAnalyzerPlugin({openAnalyzer: false})]
});