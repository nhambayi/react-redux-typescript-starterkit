/* eslint-disable global-require */
const express = require('express');
const path = require('path');
const compression = require('compression');
const pkg = require(path.resolve(process.cwd(), 'package.json'));

// Dev middleware
const addDevMiddlewares = (app, webpackConfig) => {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');

	const compiler = webpack(webpackConfig);

	const middleware = webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath,
		silent: true,
		stats: 'errors-only',

	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler, {
		log: console.log
	}));

	// Since webpackDevMiddleware uses memory-fs internally to store build
	// artifacts, we use it instead
	const fs = middleware.fileSystem;

	app.get('bundle.js', (req, res) => {
		fs.readFile(path.join(compiler.outputPath, 'bundle.js'), (err, file) => {
			if (err) {
				res.sendStatus(404);
			} else {
				res.send(file.toString());
			}
		});
	});

	app.get('*', function (req, res) {
		fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
			if (err) {
				res.sendStatus(404);
			} else {
				res.send(file.toString());
			}
		});
	});
};

// Production middleware
const addProdMiddlewares = (app, options) => {
	const publicPath = options.publicPath || '/';
	const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist');
	app.use(compression());
	app.use(publicPath, express.static(outputPath));
	app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};

module.exports = (app, options) => {
	const isProd = process.env.NODE_ENV === 'production';

	if (isProd) {
		addProdMiddlewares(app, options);
	} else {
		const webpackConfig = require('../../webpack.dev.config');
		addDevMiddlewares(app, webpackConfig);
	}

	return app;
};
