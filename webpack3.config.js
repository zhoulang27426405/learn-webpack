const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src3/index.js', // string|Array<string>|Object
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: path.resolve(__dirname, './src3/loader.js'),
          options: {
            name: 'caixunkun'
          }
        }
      },
      { 
        test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};
