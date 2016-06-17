var webpack = require('webpack');

var prodPlugins = [];

//TODO mit flag steuern - wir wollen dieses zeug nur in prod haben, sonst ist debugging schwierig
if(false){
    prodPlugins.push(new webpack.optimize.UglifyJsPlugin());
    prodPlugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    prodPlugins.push(new webpack.optimize.DedupePlugin());
}


module.exports = {  
  entry: {
    'vendor': './vendor.ts',
    'app': './a.ts'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    preLoaders: [
      { test: /\.ts$/, exclude: /vendor.ts/, loader: 'tslint' }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

  tslint: {
    emitErrors: true,
    failOnHint: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ].concat(prodPlugins)
}
