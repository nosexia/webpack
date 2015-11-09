/*global module*/
var webpack = require('webpack');
module.exports = {
    watch:true,
    resolve: {
        modulesDirectories: ['./scripts'],
        alias:{
            jquery:'lib/jquery',
            underscore: 'lib/underscore',
            backbone: 'lib/backbone',
            'angular': 'lib/angular.min',
            wx: 'lib/wx'            
        },
    },
    module: {
        loaders:[   
            {   //匹配文件问angular\.min\.js文件，通过exports-loader加载器，把window.angular暴露到module.exports = angular
                test: /angular\.min\.js$/, loader: 'exports-loader?angular'
            }
        ]
    }

};