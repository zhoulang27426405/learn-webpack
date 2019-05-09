const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const MyExampleWebpackPlugin = require('./src7/plugin')

const src = path.resolve(process.cwd(), 'src7') // 源码目录

module.exports = {
  entry: './src7/index.js', // string|Array<string>|Object
  plugins: [
    // dllPlugin关联配置
    new webpack.DllReferencePlugin({
      context: process.cwd(), // 跟dll.config里面DllPlugin的context一致
      manifest: require(path.join(src, "dll", "vendor-manifest.json"))
    }),
    new MyExampleWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'template.html',
    })
  ],
  mode: 'development', // production
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: path.resolve(__dirname, './src7/loader.js'),
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
