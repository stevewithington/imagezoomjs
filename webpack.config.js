const path = require('path');
// https://webpack.js.org/plugins/watch-ignore-plugin/
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// https://github.com/johnnyreilly/fork-ts-checker-notifier-webpack-plugin#usage
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// https://github.com/clessg/progress-bar-webpack-plugin#usage
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// https://github.com/SassNinja/media-query-plugin
// https://github.com/mike-diamond/media-query-splitting-plugin
// https://www.npmjs.com/package/webpack-dashboard
const DashboardPlugin = require('webpack-dashboard/plugin');
const mode = process.env.WEBPACK_ENV;
const isProd = mode === 'production';
const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(mode),
	}),
	new MiniCssExtractPlugin({
		filename: 'imagezoom.min.css',
	}),
	new DashboardPlugin(),
];
const PATHS = {
	entry: path.resolve(__dirname, 'src/index.ts'),
	output: path.resolve(__dirname, 'dist'),
};

if (mode === 'production') {
	// production plugins
	plugins.push(
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedChunksPlugin(),
		new webpack.NamedModulesPlugin(),
	);
} else {
	// development plugins
	plugins.push(
		new ForkTsCheckerWebpackPlugin({
			async: false,
			typescript: true,
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}', // required
			},
		}),

		new ForkTsCheckerNotifierWebpackPlugin({
			title: 'TypeScript',
			excludeWarnings: true,
			alwaysNotify: true,
			skipFirstNotification: false,
			skipSuccessful: false,
		}),

		new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
	);
}

const config = {
	context: process.cwd(), // to automatically find tsconfig.json
	mode: mode,
	optimization: {
		namedModules: true,
		namedChunks: true,
		flagIncludedChunks: !isProd,
		concatenateModules: true,
		removeAvailableModules: false,
		removeEmptyChunks: isProd,
		noEmitOnErrors: isProd,
		mangleWasmImports: false,
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.min\.js$/,
				// these are necessary to prevent MS license from being added
				terserOptions: {
					output: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	entry: {
		imagezoom: [PATHS.entry],
		'imagezoom.min': [PATHS.entry]
	},
	output: {
		path: PATHS.output,
		pathinfo: false,
		filename: '[name].js',
		library: 'zoom',
		libraryTarget: 'umd', // umd2, commonjs2, commonjs, amd, this, var, assign, window, global, jsonp
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
					happyPackMode: true,
					experimentalWatchApi: true,
				},
			},

			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
							publicPath: (resourcePath, context) => {
								return path.relative(path.dirname(resourcePath), context) + '/';
							},
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass'),
							sassOptions: {
								fiber: require('fibers'),
								outputStyle: 'compressed',
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json', '.jsx', '.scss'],
		symlinks: false,
	},
	devtool: 'inline-source-map',
	plugins: plugins,
	watch: !isProd,
	watchOptions: {
		ignored: ['node_modules/**', 'dist/**', 'lib-esm/**'],
	},
};

module.exports = config;
