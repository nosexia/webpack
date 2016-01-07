/*global module*/
module.exports = {
/*    resolve: {
        modulesDirectories: ['./scripts'],      
        alias:{
            underscore: 'lib/underscore'
        }
    },*/
    /*output: {           
        publicPath: 'scripts-build/',
        filename: '[name].js'        
    },*/
/*    externals: {
        'wx': 'wx'
    }*/
    output: {
        filename: '[name].js'
    }
};

//externals参数，indexMain.js中jquery依赖指向jQuery全局变量
