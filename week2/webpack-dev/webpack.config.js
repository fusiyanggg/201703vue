let path = require('path');
console.log(path.resolve('dist'));


module.exports = {

    entry: './src/linkdfsdfasd.js',
    output: {
        filename:'bundle.js',//打包出的文件名
        path:path.resolve('dist')          //必须是绝对路径

    }
};

// 配置入口文件 此文件