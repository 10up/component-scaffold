'use strict';

const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const componentName = 'tenup-scaffold';

module.exports = {
	mode: process.env.NODE_ENV ? 'development' : 'production',
	entry: [
		'./src/index.js',
		'./src/style.css'
	],
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: `${ componentName }.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				enforce: 'pre',
				use: {
					loader: 'eslint-loader',
					options: {
						fix: true,
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	devtool: 'source-map',
	stats: {
		colors: true
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: `${ componentName }.css`,
		} ),
	],
};
