const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  entry: './src8/index.js', // string|Array<string>|Object
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          { loader: 'happypack/loader?id=css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'css-loader',
      //如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: 'css-loader'
        }
      ],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true
    })
  ]
}
