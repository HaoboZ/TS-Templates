import * as path from 'path';
import * as webpack from 'webpack';


export default {
	entry:        [
		path.join( __dirname, '..', 'client', 'src', 'index.ts' )
	],
	output:       {
		path:       path.join( __dirname, '..', 'client', 'public', 'build' ),
		filename:   '[name].bundle.js',
		publicPath: '/build'
	},
	devtool:      'source-map',
	mode:         'development',
	module:       {
		rules: [
			{
				test:   /\.[tj]sx?$/,
				loader: [ 'babel-loader' ]
			},
			{
				test:   /\.less$/,
				loader: [ 'style-loader', 'css-loader', 'less-loader' ]
			},
			{
				test:   /\.css$/,
				loader: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	externals:    {
		'react':       'React',
		'react-dom':   'ReactDOM',
		'redux':       'Redux',
		'react-redux': 'ReactRedux'
	},
	plugins:      [ new webpack.HotModuleReplacementPlugin() ],
	resolve:      {
		extensions: [ '.js', '.jsx', '.ts', '.tsx', '.css', '.less' ]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
