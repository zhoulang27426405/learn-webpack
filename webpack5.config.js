const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const MyExampleWebpackPlugin = require('./src5/plugin')

module.exports = {
  entry: './src5/index.js', // string|Array<string>|Object
  plugins: [
    new MyExampleWebpackPlugin(),
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
          loader: path.resolve(__dirname, './src5/loader.js'),
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
}
