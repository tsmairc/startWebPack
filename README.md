#### 安装
webpack版本是1.14.0
```shell
npm init
npm install --save-dev webpack
```
#### 先介绍未生成前的代码,全部是按照commonJs规范的代码。
main.js  -- 入口
```javascripit
var chunk1=require("./module/chunk1.js");
var chunk2=require("./module/chunk2.js");
console.log(chunk1);
console.log(chunk2);
```

chunk1
```javascripit
var chunk2=require("./chunk2.js");
var chunk1=1;
exports.chunk1=chunk1;
```

chunk2
```javascripit
var chunk2=require("./chunk2.js");
var chunk1=1;
exports.chunk1=chunk1;
```

#### 生成后的代码
// 执行模块，将模块内的方法暴露在exports变量中
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
上面这段代码后，module.export变量被改变，方法里要暴露的东西全在里面。然后通过__webpack_require__返回。
```javasciprt
/******/ (function(modules) { // webpackBootstrap
/******/ 	// 缓存变量
/******/ 	var installedModules = {};

/******/ 	// 引用方法
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// 查看当前模块是否已经缓存在installedModules变量
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// 新建一个模块 (把它放进到缓存里面)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// 执行模块，将模块内的方法暴露在exports变量中
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// 标记当前模块已经加载
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var chunk1=__webpack_require__(1);
	var chunk2=__webpack_require__(2);
	console.log(chunk1);
	console.log(chunk2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var chunk2=__webpack_require__(2);
	var chunk1=1;
	exports.chunk1=chunk1;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var chunk2=1;
	exports.chunk2=chunk2;

/***/ }
/******/ ]);
```

