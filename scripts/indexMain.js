define([
],function(){
    //webpack打包，js文件引入node内置模块'url'
    var url = require('url');
    var urlResult = url.parse('http://webpack.toobug.net/zh-cn/index.html');
    //url对应parse方法，解析urlResult字符串
    console.log(url.parse(urlResult));
});



