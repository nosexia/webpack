/*global module*/
module.exports = {
    watch: true,
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
       loaders:[
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ] 
    }
    
};


// 增加调试工具devtool 'source-map'