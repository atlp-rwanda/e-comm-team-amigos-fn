const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		assetModuleFilename: 'assets/img/[hash][ext][query]',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			favicon: './src/assets/img/logo.png',
		}),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: './public/_redirects', to: '' }],
		}),
		new Dotenv(),
	],
	module: {
		rules: [
			{
				test: /\.(c|sc)ss$/i,

				use: [
					// Creates `style` nodes from JS strings
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
							['@babel/preset-react', { runtime: 'automatic' }],
						],
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,

				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		hot: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
		historyApiFallback: {
			disableDotRule: true,
		},
	},
};
