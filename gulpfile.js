var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');

/*var Head = document.getElementsByTagName('head')[0];
var wxScript = document.createElement('scripts');
wxScript.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
Head.appendChild(wxScript);*/

gulp.task('default', function() {

    var tmp = {};


    return gulp.src(['./scripts/*Main.js'],{
        base:'./scripts/'
    })
    .pipe(named(function(file){
        //获取文件名
        var path = require('path');
        var moduleName = path.relative(path.join(file.cwd,file.base),file.history[0]);
        moduleName = moduleName.replace(/.js$/,'');
        console.log(moduleName);
        return moduleName;
    }))

    //引入webpack.config.js
    .pipe(webpack(require('./webpack.config.js')))
    /*.pipe(rename(function (path) {
        path.dirname = tmp[path.basename].dirname;
    }))*/
    .pipe(gulp.dest('scripts-build/'));
});