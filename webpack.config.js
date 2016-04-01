/*global module*/
module.exports = {
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
        wx: 'wx'
    }
    
};


// 增加调试工具devtool 'source-map'