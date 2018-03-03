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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);

window.onload = function () { return (new __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */]).start(); };


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cat__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Fish__ = __webpack_require__(4);


var Controller = /** @class */ (function () {
    function Controller() {
        this.canvas = document.getElementById('my-canvas');
        if (!this.canvas.getContext) {
            return;
        }
        this.context = this.canvas.getContext('2d');
        this.wrapper = document.getElementById('canvas-wrapper');
        this.canvas.setAttribute('width', "" + this.wrapper.offsetWidth);
        this.canvas.setAttribute('height', "" + this.wrapper.offsetHeight);
    }
    Controller.prototype.start = function () {
        var _this = this;
        this.cat = new __WEBPACK_IMPORTED_MODULE_0__Cat__["a" /* default */](this.wrapper, this.context);
        this.wrapper.onclick = function (e) { return _this.putFish(e); };
    };
    Controller.prototype.putFish = function (e) {
        var newFish = new __WEBPACK_IMPORTED_MODULE_1__Fish__["a" /* default */](e, this.context);
        this.cat.setTarget(newFish);
    };
    return Controller;
}());
/* harmony default export */ __webpack_exports__["a"] = (Controller);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);
throw new Error("Cannot find module \"../images/cat2\"");

// @ts-ignore

var Cat = /** @class */ (function () {
    function Cat(wrapper, context, size, img, targets) {
        if (size === void 0) { size = 32; }
        if (img === void 0) { img = new Image(); }
        if (targets === void 0) { targets = []; }
        var _this = this;
        this.wrapper = wrapper;
        this.context = context;
        this.size = size;
        this.img = img;
        this.targets = targets;
        this.x = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomInt */])(10, this.wrapper.offsetWidth - 20);
        this.y = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomInt */])(10, this.wrapper.offsetHeight - 20);
        this.changePace();
        this.img.src = __WEBPACK_IMPORTED_MODULE_1__images_cat2___default.a;
        this.img.onload = function () {
            setInterval(_this.walk.bind(_this), 30);
        };
    }
    Cat.prototype.setTarget = function (target) {
        this.targets.push(target);
        if (this.targets.length === 1) {
            this.changePace();
        }
    };
    Cat.prototype.changePace = function () {
        if (this.targets.length !== 0) {
            this.speedX = (this.targets[0].x - this.x) / 20;
            this.speedY = (this.targets[0].y - this.y) / 20;
        }
        else {
            this.speedX = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomInt */])(2, 4) * Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* randomSign */])();
            this.speedY = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomInt */])(2, 4) * Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* randomSign */])();
        }
    };
    Cat.prototype.walk = function () {
        if (this.isFishNearby()) {
            this.eatFish();
            this.changePace();
        }
        this.context.clearRect(this.x, this.y, this.size, this.size);
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > this.wrapper.offsetWidth) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > this.wrapper.offsetHeight) {
            this.speedY *= -1;
        }
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    };
    Cat.prototype.isFishNearby = function () {
        return this.targets[0]
            && (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* diff */])(this.targets[0].x, this.x) < 20)
            && (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* diff */])(this.targets[0].y, this.y) < 20);
    };
    Cat.prototype.eatFish = function () {
        this.targets[0].die();
        this.targets.shift();
        this.size += 2;
    };
    return Cat;
}());
/* harmony default export */ __webpack_exports__["a"] = (Cat);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = randomInt;
/* harmony export (immutable) */ __webpack_exports__["c"] = randomSign;
/* harmony export (immutable) */ __webpack_exports__["a"] = diff;
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomSign() {
    return [1, -1][randomInt(0, 1)];
}
function diff(x, y) {
    return Math.abs(x - y);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"../images/fish\"");
// @ts-ignore

var Fish = /** @class */ (function () {
    function Fish(e, context, size, img) {
        if (size === void 0) { size = 32; }
        if (img === void 0) { img = new Image(); }
        this.e = e;
        this.context = context;
        this.size = size;
        this.img = img;
        this.img.src = __WEBPACK_IMPORTED_MODULE_0__images_fish___default.a;
        var rect = e.target.getBoundingClientRect();
        this.x = e.clientX - rect.left;
        this.y = e.clientY - rect.top;
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
    Fish.prototype.die = function () {
        this.context.clearRect(this.x, this.y, this.size, this.size);
    };
    return Fish;
}());
/* harmony default export */ __webpack_exports__["a"] = (Fish);


/***/ })
/******/ ]);