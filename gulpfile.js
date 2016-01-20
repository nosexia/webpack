var gulp = require('gulp');
var named = require('vinyl-named');
// 引入webpack模块
var webpack = require('webpack-stream');

var devConfig = require('./webpack.config.js');


gulp.task('dev', function(){
    return gulp.src('./scripts/test.js')
    .pipe(named())          
    .pipe(webpack(devConfig))
    .pipe(gulp.dest('./scripts-build'));
});

// 当'./scripts/test.js'变化时，执行dev
gulp.task('watch', function(){
    return gulp.watch('./scripts/test.js', ['dev']);
});



gulp.task('default', ['dev', 'watch']);


