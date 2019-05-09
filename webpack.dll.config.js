// webpack.dll.config.js
const path = require('path');
const webpack = require('webpack');
const src = path.resolve(process.cwd(), 'src7'); // 源码目录

module.exports = {
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: [path.resolve(src, 'vendor.js')]
  },
  output: {
    path: path.join(src, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this'
  },
  plugins: [
    new webpack.DllPlugin({
      // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.join(src, 'dll', '[name]-manifest.json'),

      // 定义打包的公共vendor文件对外暴露的函数名
      name: '[name]_[hash]'
    })
  ]
};
