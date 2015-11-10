/*global module*/

module.exports = {
    watch:false,
    resolve: {
        modulesDirectories: ['./scripts'],
        alias:{
            underscore: 'lib/underscore'
        }
    },
    entry:['indexMain'],
    output: {
        path: 'scripts-build/',             
        publicPath: 'scripts-build/',
        filename: '[name].js'        
    },
    externals: {
        'jquery': 'jQuery'
    }
};

//externals参数，indexMain.js中jquery依赖指向jQuery全局变量
