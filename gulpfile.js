var gulp = require('gulp');
var named = require('vinyl-named');
// 引入webpack模块
var webpack = require('webpack-stream');


// 暂时不懂
var devConfig = {
    output : {
        filename : '[name].js'
    },
    /*
    module : {
        loaders : [
            {test : /\.html$/, loader : 'text'}
        ]
    },
   /* devtool: '#source-map'*/
};

devConfig = require('./webpack.config.js');


gulp.task('dev', function(){
    return gulp.src('./scripts/test.js')
    .pipe(named())          
    .pipe(webpack(devConfig))
    .pipe(gulp.dest('./scripts-build'));
});

// 当'./scripts/test.js'变化时，执行dev
//gulp.watch(['./scripts/test.js'],['dev']);
