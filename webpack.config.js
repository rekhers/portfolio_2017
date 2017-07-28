/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './views/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './public/scripts/main.js', 
  output: {
    path: './public/build/',
    filename: 'bundle.js'
  },
module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },

      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
        {
      // HTML LOADER
      test: /\.html$/,
      loader: 'html-loader'
    }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}




