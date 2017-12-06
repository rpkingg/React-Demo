module.exports = {
    entry: __dirname + '/components/ManageSystem.js',
	output: {
	    path: __dirname + '/bundle',
		filename: "bundle.js"
	},
	externals: {
	    'react': 'React'
	},
	devtool: 'eval-source-map',  //生成source file
	module: {
	    loaders: [
		  {
		    test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
			  presets: ['es2015', 'react']
			}
		  }
		]
	}
};