## node中自带commonjs
- 如何定义模块 -> 一个js一个模块
- 如何导出模块 -> module.exports exports
- 如何使用模块 -> require

## es6 支 持模块
- 如何定义模块
- 如何导出模块 -> export
- 如何使用模块 -> import

 ---
## webpack 构建项目
> 通过webpack打包项目，合并各个模块，然后在html中引入打包好的js文件即可。
>

1. 创建项目目录 初始化package.json
2. npm install webpack --save-dev //不使用-g
2. 创建webpack.config.js 配置文件进行配置操作,创建src目录放资源文件，dist目录放导出结果的文件（可以随便起名）
   > 因为webpack.config.js中规定了打包的规则，所以package.json中的入口文件应改为webpack。并且在script中配置执行脚本。脚本名随意，值为"webpack" ，脚本存放在/node_modules/.bin/webpack.cmd ||npm run webpack ||webpack xxx.js xxx.js

> 若需要将es6转换成es5需要配置babel ，但babel-cli是需要命令行操作的所以在这使用另一种办法;需要解析es6 babel-core babel-loader 不同的loader处理不同的文件

4. npm install babel-core babel-loader --save-dev
5. 安装es6 预设，配置 .babelrc 转化规则 :npm install babel-preset-es2015 --save-dev
