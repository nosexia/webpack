module.exports = {
    entry: './scripts/indexMain.js',
    output: {
        filename: './scripts-build/indexMain.js'
    }
};

//在当前文件夹下面，打包indexMain
//配置entry参数，需要打包文件
//配置output参数  输出打包文件
//output: {
//filename: './scripts-build/indexMain.js'
//}
//
//
//
//
//在当前文件夹下，执行webpack,执行webpack.config.js对文件打包