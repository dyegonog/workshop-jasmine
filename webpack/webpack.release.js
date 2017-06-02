'use strict';
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;

const ENV = process.env.ENV = 'release';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-source-map',
	
    plugins: [
        new CleanWebpackPlugin('dist', { root: path.resolve(__dirname, '..') }),
        new NoEmitOnErrorsPlugin(),
        new UglifyJsPlugin()
    ]
});