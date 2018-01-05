var path = require('path'),
	publicPath = '';

module.exports = {
	entry: {
		'app': path.join(process.cwd(), 'app/app.jsx')
	},
	output: {
		path: path.join(process.cwd(), publicPath),
		filename: 'scripts/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'fonts/[name].[ext]'
				}
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'images/[name].[ext]'
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(process.cwd(), publicPath),
		port: 9000
	}
}