/*global module*/
module.exports = {
    watch : true,
    output: {
        chunkFilename : '[id].[chunkhash].js',
        publicPath: './scripts-build/'
    },
    resolve: {
        alias: {
            'jquery': './lib/jquery-1.9.1.min.js'
        }
    },
    
    devtool: 'source-map',
    module: {
       loaders:[
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ] 
    },
    externals:{
        wx: 'wx',
        jquery: 'jQuery'
    }
    
};


// 增加调试工具devtool 'source-map'