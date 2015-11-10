/*global module*/
module.exports = {
    watch:false,
    resolve: {
        modulesDirectories: ['./scripts'],
        alias:{
            jquery:'lib/jquery',
            underscore: 'lib/underscore'
        }
    },
    entry:'indexMain',
    output: {
        path: 'scripts-build/',             
        publicPath: 'scripts-build/',
        filename: 'indexMain.js'        
    }
};

//output.path  参数设置    indexMain所在文件夹
//output.publicPath 参数设置， 1.1.js所在文件夹

