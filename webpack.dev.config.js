var path = require('path');
var webpack = require('webpack');
var webpackHotMiddleware = require ('webpack-hot-middleware');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./app/Index.tsx'
],
	output: {
		filename: "bundle.js",
		path: __dirname + "/src"
	},

	target: "web",
	engines: {
  node: "4.x"
},
	devtool: "source-map",

	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		loaders: [
			{ test: /\.tsx?$/, exclude: /node_modules/, loaders: ["react-hot", "awesome-typescript-loader"] },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
							test: /\.less$/,
							loaders: [
											'style?sourceMap',
											'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
											'less-loader'
							]
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
		],

		preLoaders: [
			{ test: /\.tsx?$/, exclude: /node_modules/, loader: "tslint" },
			{ test: /\.js$/, loader: "source-map-loader?modules=true&localIdentName=[name]_[local]__[hash:base64:5]" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'app', 'index.html'),
			hash: true
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	externals: {
	}
};
