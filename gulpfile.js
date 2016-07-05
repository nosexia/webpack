var gulp = require('gulp');
var named = require('vinyl-named');
// 引入webpack模块
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var extend = require('extend');
var runSequence = require('run-sequence');
var devConfig = require('./webpack.config.js');
var rev = require('gulp-rev-hash');
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

// 在src中加入第二个options参数base，
// options.cwd

// Type: String Default: process.cwd()

// cwd for the output folder, only has an effect if provided output folder is relative.
// 
// 在named中传入函数，可以改写返回值，生成的目标文件夹和源文件一致
//     .pipe(named(function(file){
//         var path = require('path');
//         var moduleName = path.relative(path.join(file.cwd,file.base),file.history[0]);
//         moduleName = moduleName.replace(/.js$/,'');        
//         return moduleName;
//     }))
gulp.task('dev', function(){
    return gulp.src('./scripts/test/*Main.js',{
        base : './scripts'
    })
    .pipe(named(function(file){
        var path = require('path');
        var moduleName = path.relative(path.join(file.cwd,file.base),file.history[0]);
        moduleName = moduleName.replace(/.js$/,'');        
        return moduleName;
    }))
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

gulp.task('rev', function(){
    gulp.src(['../view/**/*.html'])
    .pipe(rev())
    .pipe(gulp.dest('../view/'));
});


/*gulp.task('prod', function(){
    return gulp.src('./css/common.css')
    .pipe(named())
    .pipe(webpackStream(pordConfig))
    .pipe(gulp.dest('./css-build'));    
});*/


gulp.task('default', ['dev', 'rev']);

gulp.task('pub', function(){
    runSequence('prod');
});

// gulp.task('dev', function(){
//     runSequence('dev');
// });