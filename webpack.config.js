/*global module*/
module.exports = {
    watch: true,
    output: {
        filename: '[name].js',
        publicPath: './scripts-build/'
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