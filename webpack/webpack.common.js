'use strict';
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ContextReplacementPlugin = webpack.ContextReplacementPlugin;
const packageJson = require('../package.json');
const rootDir = path.resolve(__dirname, '..');

module.exports = function (options) {
	const ENV = options.env;
	const VERSION = packageJson.version;

	return {
		entry: {
			'polyfills': [path.resolve(rootDir, 'src/app', 'polyfills')],
			'vendor': [path.resolve(rootDir, 'src/app', 'vendor')],
			'app': [path.resolve(rootDir, 'src/app', 'main')]
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: ['to-string-loader'].concat(ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })).concat(['sass-loader'])
				},
				{
					test: /\.css$/,
					include: /node_modules/,
					use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
				},
				{
					test: /\.html$/,
					use: {
						loader: 'html-loader',
						query: {
							removeAttributeQuotes: false,
							caseSensitive: true,
							customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
							customAttrAssign: [/\)?\]?=/]
						}
					}
				},
				{
					test: /\.ts$/,
					include: path.resolve(rootDir, 'src/app'),
					use: ['awesome-typescript-loader', 'angular2-template-loader']
				},
				{
					test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
					use: 'file-loader?name=assets/[name].[hash].[ext]'
				}
			]
		},
		output: {
			filename: '[name].[chunkhash].bundle.js',
			path: path.resolve(rootDir, 'dist')
		},
		plugins: [
			new ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),

			new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(rootDir, 'src')),

			new CommonsChunkPlugin({
				name: ['app', 'vendor', 'polyfills']
			}),

			new CopyWebpackPlugin([
				{ from: 'src/assets/js', to: 'assets/js' },
			]),

			new DefinePlugin({
				ENV: JSON.stringify(ENV),
				VERSION: JSON.stringify(VERSION),
				'process.env': {
					ENV: JSON.stringify(ENV),
					VERSION: JSON.stringify(VERSION)
				}
			}),

			new ExtractTextPlugin('[name].[contenthash].css'),

			new HtmlWebpackPlugin({
				filename: 'index.html',
				inject: 'body',
				template: path.resolve(rootDir, 'src', 'index.html')
			})
		],
		resolve: {
			extensions: ['.js', '.ts']
		}
	};
};