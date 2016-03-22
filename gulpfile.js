var gulp = require('gulp');
var named = require('vinyl-named');
// 引入webpack模块
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var extend = require('extend');
var runSequence = require('run-sequence');
var devConfig = require('./webpack.config.js');
// uglifycss 压缩css
var uglifycss = require('gulp-uglifycss');
// 用cssimport，引入css文件。
var cssimport = require('gulp-cssimport');
var pordConfig = extend({}, devConfig, {
    watch: false,
    plugins: [new webpack.optimize.UglifyJsPlugin]
});


// 阻止gulp中断，当出现错误的时候
var plumber = require('gulp-plumber');


gulp.task('dev', function(){
    return gulp.src('./scripts/**/*Main.js')
    .pipe(named())  
    .pipe(plumber())        
    .pipe(webpackStream(devConfig))    
    .pipe(gulp.dest('./scripts-build'));
});


gulp.task('prod', function(){
    return gulp.src('./scripts/test.js')
    .pipe(named())
    .pipe(webpackStream(pordConfig))
    .pipe(gulp.dest('./scripts-build'));    
});

gulp.task('prod-css', function(){
    return gulp.src('./css/common.css')
    .pipe(cssimport())
    .pipe(uglifycss())
    .pipe(gulp.dest('./css-build'));
});


/*gulp.task('prod', function(){
    return gulp.src('./css/common.css')
    .pipe(named())
    .pipe(webpackStream(pordConfig))
    .pipe(gulp.dest('./css-build'));    
});*/

// 当'./scripts/test.js'变化时，执行dev
gulp.task('watch', function(){
    return gulp.watch('./scripts/test.js', ['dev']);
});

gulp.task('default', ['dev']);

gulp.task('pub', function(){
    runSequence('prod');
});