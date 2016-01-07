/*global module*/
module.exports = {
    watch:false,
    resolve: {
        modulesDirectories: ['./scripts'],      //alias的入口文件
        alias:{
            underscore: 'lib/underscore'
        }
    },
    output: {           
        publicPath: 'scripts-build/',
        filename: '[name].js'        
    },
/*    externals: {
        'wx': 'wx'
    }*/
};

//externals参数，indexMain.js中jquery依赖指向jQuery全局变量
