var webpack = require('webpack');

module.exports = {  
  entry: {
    'vendor': './vendor.ts',
    'app': './a.ts'
  },
//  output: {
//    filename: 'bundle.js'
//  },

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
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ]
}
