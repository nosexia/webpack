/*global module*/
module.exports = {
    watch : true,
    enter : ['./scripts'],
    output: {
        chunkFilename : '[id].[chunkhash].js',
        publicPath: './scripts-build/'
    },
    resolve: {
        alias: {
            'jquery': './lib/jquery-1.9.1'
        }
    },
    
    devtool: 'source-map',
    // amd默认是一个对象，给amd对象设置一些值，$, jQuery
    amd : {
        $ : true,
        jQuery : true
    },
    module: {
       loaders:[
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ] 
    },
    externals:{
        wx: 'wx'
    }
};


// 增加调试工具devtool 'source-map'