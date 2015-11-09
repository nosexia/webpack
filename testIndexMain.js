/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};

/******/    // The require function
/******/    function __webpack_require__(moduleId) {

/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;

/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };

/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/        // Flag the module as loaded
/******/        module.loaded = true;

/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }


/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;

/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;

/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";

/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(1)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(example2){
        example2.sayHello();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
        return {
            sayHello:function(){
                alert('hello world!');
            }
        };
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);





/* 0 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__,       //模块依赖列表
    __WEBPACK_AMD_DEFINE_RESULT__;          //模块返回结果
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(1)          //__weboacj_require__(1) 获取模块1的返回值
    ], 
    __WEBPACK_AMD_DEFINE_RESULT__ = function(example2){
        //此处是采用非模块话的方式编写，
        //没有没有通过AMD方式的return
        //也CommonJS的exports或者this导出模块本身
        //导致模块被其他模块引入时，返回值是undefined
        example2.sayHello();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), 
    //__WEBPACK_AMD_DEFINE_RESULT__ !==undefined
    //module.exports == __WEBPACK_AMD_DEFINE_RESULT__       如果是AMD模块，返回模块内容，否则返回默认值module.exports = {};
    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },