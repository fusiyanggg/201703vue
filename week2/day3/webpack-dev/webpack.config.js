let _path = require('path'); //引入path 模块
let abs_path = _path.resolve('dist'); //将相对路径转换成绝对路径
console.log(abs_path);

module.exports = {

    //打包 将内容 合并后导出到一个文件
    entry: './src/index.js',
    output: {
        filename: 'bound.js',     //导出的文件名
        path: abs_path            //导出文件的路径，必须是绝对路径。通过引入path模块可对路径进行转换
    },
    //我们需要编译es6语法，用到babel 需要添加module模块
    module: { //可以存放规则
        rules: [
            //需要告诉loader翻译什么样的类型。babel需要在当前根目录下建立一个文件，配上预设才可以 => .babelrc
            //通过正则匹配加载的文件 || 使用加载器类型 || 正则匹配不包含的东西
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
};