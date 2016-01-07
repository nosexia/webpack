/**
 * Created by rick on 2015/10/29.
 */
'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var named = require('vinyl-named');
var extend = require('extend');
var exec = require('child_process').exec;
var rev = require('gulp-rev-hash');
require('text-loader');

gulp.task('copy', function(){
    return gulp.src('./scripts/source/**/*Main.js').pipe(gulp.dest('./scripts/dist'));
});

var devConfig = {
    output : {
        filename : '[name].js'
    },
    module : {
        loaders : [
            {test : /\.html$/, loader : 'text'}
        ]
    },
    devtool: '#source-map'
};

var prodConfig = extend({}, devConfig, {
    plugins:[new webpack.optimize.UglifyJsPlugin('*.js')]
});

gulp.task('dev', function(){
    return gulp.src('./scripts/source/**/*Main.js').pipe(named()).pipe(gulpWebpack(devConfig)).pipe(gulp.dest('./scripts/dist'));
});

// 自动添加版本号
gulp.task('rev',function(){
    gulp.src('../views/layouts/main.html')
    .pipe(rev({
        assetsDir:'.'//要加css和js的文件目录 gulpfile.js是与'/css/font-face.css'的第一个'/'在同一级,即当前目录
    }))
    .pipe(gulp.dest('../views/layouts'));
});

gulp.task('npm-install', function(cb){
    exec('npm install', function(err, stdout, stderr){
        console.log('stdout : ' + stdout);
        console.log('stderr : ' + stderr);
        cb(err);
    });
});

gulp.task('flatten', ['npm-install'], function(cb){
    exec('flatten-packages ./', function(err, stdout, stderr){
        console.log('stdout : ' + stdout);
        console.log('stderr : ' + stderr);
        cb(err);
    });
});

gulp.task('prod', ['npm-install', 'flatten','rev'], function(){
    return gulp.src('./scripts/source/**/*Main.js').pipe(named()).pipe(gulpWebpack(prodConfig)).pipe(gulp.dest('./scripts/dist'));
});

gulp.task('watch', function(){
    gulp.watch(['./scripts/source/**/*.js', './scripts/source/**/*.html'], ['dev']);
});

gulp.task('default', ['dev', 'watch']);
