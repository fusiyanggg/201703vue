/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var str = 'world';
var sum = exports.sum = function sum() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return a + b;
};

var result = sum(4, 5);
function fn() {
    return 'ahon';
}
var obj = { name: 'jack', age: '18', fav: ['swim', 'game'] };
var obj1 = { str: str, obj: obj, sum: sum, fn: fn, result: result };
exports.default = obj1;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.css';
// import './style.less';
// import src from './1.jpg';
var a = function a() {
  return _component2.default;
}; /*
    require这个语法不能在浏览器中使用，webpack可以将commonjs规范转化成可识别的
    let str = require('./component');
    console.log(str);
    */

console.log(a());
//============================================
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//链接两个数组可以用arr1.concat(arr2);
//还可以用es6 拓展运算符
console.log([].concat(arr1, arr2));
//--------------------------------------------
/*let obj1 = {name: 1};
let obj2 = {age: 2};
console.log({...obj1, ...obj2});*/
//============================================

var oImg = document.createElement('img');
var oImg1 = document.createElement('img');
var oImg2 = document.createElement('img');
// oImg.src = src; //在js中引用路径如果是字符串 默认不会将图片导出
// oImg1.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
// oImg2.src = './1.jpg';
//在js中引用路径如果是字符串 默认不会将图片导出
// document.body.appendChild(oImg);
// document.body.appendChild(oImg1);


//我喜欢 前端清一色 import export  服务端 exports module.exports
//js文件用import export (css/img 用require)


//vue-cli 就是基于webpack搭建的项目
//npm install vue-cli -g 安装后全局命令行下 有个vue的命令
//simple / webpack

/***/ })
/******/ ]);