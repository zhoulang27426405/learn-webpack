# learn-webpack
## stage1
了解webpack的 `entry` 和 `output`
执行 `npm run webpack1`
## stage2
了解webpack的 `loader`
执行 `npm run webpack2`
## stage3
如何写一个 `loader` ,加载vue文件，并将{{}}里的内容替换成option里的配置
执行 `npm run webpack3`
## stage4
了解webpack的 `plugin`
执行 `npm run webpack4`
## stage5
如何写一个`plugin`
执行 `npm run webpack5`
## stage6
tree shaking
## stage7
使用dlls插件进行拆解打包
## stage8
使用happy插件多进程处理
## stage9
性能优化建议：
1.先进行性能分析
-使用 `speed-measure-webpack-plugin` 插件找出用时慢的loader和plugin
-使用 `webpack-bundle-analyzer` 插件分析bundle
2.升级最新的 webpack 版本。webpack自身会进行性能优化
3.将loader应用于更少的模块
4.减少resolve.extensions的类目,因为他们会增加文件系统调用的次数
5.减少编译体积 small = faster
6.生产环境不要使用source-map
