(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zoom", [], factory);
	else if(typeof exports === 'object')
		exports["zoom"] = factory();
	else
		root["zoom"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/ImageZoom.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/restrict-plus-operands */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var ImageZoom = /** @class */ (function () {
    function ImageZoom(element, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // defaults / options
        this.defaults = {
            minScale: 1,
            maxScale: 10,
            speed: 10
        };
        this._initState = function () {
            return {
                element: _this._element,
                minScale: _this._options.minScale,
                maxScale: _this._options.maxScale,
                speed: _this._options.speed,
                transformation: {
                    originX: 0,
                    originY: 0,
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                },
                bounds: _this._element.getBoundingClientRect(),
            };
        };
        this._initInstance = function () {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return Object.assign({}, _this.canZoom(_this._state), _this.canPan(_this._state));
        };
        this._initEventListeners = function () {
            // Zoom In Element
            if (_this._options.zoomInElement) {
                var el = _this._options.zoomInElement;
                var timerid_1;
                _this.on(el, 'click', function () {
                    _this.zoomIn();
                });
                // Long press = continue zooming in
                _this.on(el, 'mousedown', function () {
                    timerid_1 = setInterval(function () {
                        _this.zoomIn();
                    }, 20);
                });
                _this.on(el, 'mouseup', function () {
                    clearInterval(timerid_1);
                });
            }
            // Zoom Out Element
            if (_this._options.zoomOutElement) {
                var el = _this._options.zoomOutElement;
                var timerid_2;
                _this.on(el, 'click', function () {
                    _this.zoomOut();
                });
                // Long press = continue zooming out
                _this.on(el, 'mousedown', function () {
                    timerid_2 = setInterval(function () {
                        _this.zoomOut();
                    }, 20);
                });
                _this.on(el, 'mouseup', function () {
                    clearInterval(timerid_2);
                });
            }
            // Range Element
            if (_this._options.rangeElement) {
                var el_1 = _this._options.rangeElement;
                // update the range input to match options
                el_1.min = _this._options.minScale.toString();
                el_1.max = _this._options.maxScale.toString();
                el_1.step = (_this._options.speed * 0.001).toString();
                el_1.defaultValue = el_1.min;
                // Range Input Event Handler
                _this.on(el_1, 'input', function () {
                    // value from range input is stored as a string, convert to number for computation
                    var scaleFactor = Number(el_1.value);
                    var deltaScale = scaleFactor > _this._state.transformation.scale ? 1 : -1;
                    _this._zoom(deltaScale, scaleFactor);
                });
            }
            // Double Click = Reset
            _this.on(_this._element, 'dblclick', function () {
                _this._instance.panTo({
                    originX: 0,
                    originY: 0,
                    scale: 1,
                });
                // Reset origin point
                _this._originPoint = {
                    x: 0,
                    y: 0
                };
                // Reset Range Slider Input
                if (_this._options.rangeElement) {
                    _this._options.rangeElement.value = '0';
                }
            });
            // Wheel = zoom in/out
            _this.on(_this._element, 'wheel', function (event) {
                event.preventDefault();
                _this._instance.zoom({
                    deltaScale: Math.sign(event.deltaY) > 0 ? -1 : 1,
                    x: event.pageX,
                    y: event.pageY
                });
            });
            // Shift Key + Mouse Move = Drag/Move
            _this.on(_this._element, 'mousemove', function (event) {
                if (!event.shiftKey) {
                    return;
                }
                event.preventDefault();
                _this._instance.panBy({
                    originX: event.movementX,
                    originY: event.movementY
                });
            });
        };
        this.zoomIn = function () {
            var scaleFactor = _this._state.transformation.scale + (1 / _this._options.speed);
            _this._zoom(1, scaleFactor);
        };
        this.zoomOut = function () {
            var scaleFactor = _this._state.transformation.scale + (-1 / _this._options.speed);
            _this._zoom(-1, scaleFactor);
        };
        this.canZoom = function (state) {
            return ({
                zoom: function (_a) {
                    var x = _a.x, y = _a.y, deltaScale = _a.deltaScale;
                    var _b = state.element.getBoundingClientRect(), left = _b.left, top = _b.top;
                    var minScale = state.minScale, maxScale = state.maxScale, speed = state.speed;
                    var _c = tslib_1.__read(_this.getScale({ scale: state.transformation.scale, deltaScale: deltaScale, minScale: minScale, maxScale: maxScale, speed: speed }), 2), scale = _c[0], newScale = _c[1];
                    var originX = x - left;
                    var originY = y - top;
                    var newOriginX = originX / scale;
                    var newOriginY = originY / scale;
                    var translate = _this.getTranslate({ scale: scale, minScale: minScale, maxScale: maxScale });
                    var translateX = translate({ pos: originX, prevPos: state.transformation.originX, translate: state.transformation.translateX });
                    var translateY = translate({ pos: originY, prevPos: state.transformation.originY, translate: state.transformation.translateY });
                    // If the image hasn't been scaled yet, assume we should scale from the center
                    state.element.style.transformOrigin =
                        newOriginX === 0 && newOriginY === 0
                            ? 'center'
                            : newOriginX + "px " + newOriginY + "px";
                    state.element.style.transform = _this.getMatrix({ scale: newScale, translateX: translateX, translateY: translateY });
                    state.transformation = { originX: newOriginX, originY: newOriginY, translateX: translateX, translateY: translateY, scale: newScale };
                    state.bounds = state.element.getBoundingClientRect();
                    // Capture the Calculated Origin Point and store it for use elsewhere as needed
                    var newOrigins = state.element.style.transformOrigin;
                    var arrOrigins = newOrigins.split(' ');
                    arrOrigins.forEach(function (element, index, array) {
                        var temp = element.replace('px', '');
                        array[index] = Number(temp);
                    });
                    _this._originPoint = {
                        x: arrOrigins[0],
                        y: arrOrigins[1]
                    };
                    _this._updateRangeValue();
                }
            });
        };
        this.pan = function (_a) {
            var state = _a.state, originX = _a.originX, originY = _a.originY;
            state.transformation.translateX += originX;
            state.transformation.translateY += originY;
            state.element.style.transform =
                _this.getMatrix({
                    scale: state.transformation.scale,
                    translateX: state.transformation.translateX,
                    translateY: state.transformation.translateY
                });
        };
        this.canPan = function (state) {
            return ({
                panBy: function (_a) {
                    var originX = _a.originX, originY = _a.originY;
                    return _this.pan({ state: state, originX: originX, originY: originY });
                },
                panTo: function (_a) {
                    var originX = _a.originX, originY = _a.originY, scale = _a.scale;
                    state.transformation.scale = scale;
                    _this.pan({
                        state: state,
                        originX: originX - state.transformation.translateX,
                        originY: originY - state.transformation.translateY
                    });
                },
            });
        };
        this.getMatrix = function (_a) {
            var scale = _a.scale, translateX = _a.translateX, translateY = _a.translateY;
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            return "matrix(" + scale + ", 0, 0, " + scale + ", " + translateX + ", " + translateY + ")";
        };
        this.getScale = function (_a) {
            var scale = _a.scale, minScale = _a.minScale, maxScale = _a.maxScale, speed = _a.speed, deltaScale = _a.deltaScale;
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            var newScale = scale + (deltaScale / (speed / scale));
            newScale = Math.max(minScale, Math.min(newScale, maxScale));
            return [_this._round(scale), _this._round(newScale)];
        };
        this.valueInRange = function (_a) {
            var minScale = _a.minScale, maxScale = _a.maxScale, scale = _a.scale;
            return scale <= maxScale && scale >= minScale;
        };
        this.hasPositionChanged = function (_a) {
            var pos = _a.pos, prevPos = _a.prevPos;
            return pos !== prevPos;
        };
        this.getTranslate = function (_a) {
            var minScale = _a.minScale, maxScale = _a.maxScale, scale = _a.scale;
            return function (_a) {
                var pos = _a.pos, prevPos = _a.prevPos, translate = _a.translate;
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-return*/
                return _this.valueInRange({ minScale: minScale, maxScale: maxScale, scale: scale })
                    && _this.hasPositionChanged({ pos: pos, prevPos: prevPos })
                    ? (translate + ((pos - prevPos) * scale)) * ((1 - 1) / scale)
                    : translate;
            };
        };
        this.getTouchPointsDistance = function (touches) {
            var touch0 = touches[0];
            var touch1 = touches[1];
            return Math.sqrt(Math.pow(touch1.pageX - touch0.pageX, 2) + Math.pow(touch1.pageY - touch0.pageY, 2));
        };
        // Custom Event Registration Method, ensures eventListeners are also removed ;)
        this.on = function (target, type, listener, options) {
            var opts = options ? options : _this._passiveSupportOption();
            target.addEventListener(type, listener, opts);
            return function () {
                target.removeEventListener(type, listener, opts);
            };
        };
        this._zoom = function (deltaScale, scaleFactor) {
            if (scaleFactor === void 0) { scaleFactor = 1; }
            scaleFactor = scaleFactor < _this._options.minScale
                ? _this._options.minScale
                : scaleFactor > _this._options.maxScale
                    ? _this._options.maxScale
                    : scaleFactor;
            var _a = _this._state, minScale = _a.minScale, maxScale = _a.maxScale, speed = _a.speed;
            var _b = tslib_1.__read(_this.getScale({
                scale: scaleFactor,
                deltaScale: deltaScale,
                minScale: minScale,
                maxScale: maxScale,
                speed: speed,
            }), 2), scale = _b[0], newScale = _b[1];
            var originX = _this._originPoint.x;
            var originY = _this._originPoint.y;
            var translate = _this.getTranslate({ scale: scale, minScale: minScale, maxScale: maxScale });
            var translateX = translate({
                pos: originX,
                prevPos: _this._state.transformation.originX,
                translate: _this._state.transformation.translateX,
            });
            var translateY = translate({
                pos: originY,
                prevPos: _this._state.transformation.originY,
                translate: _this._state.transformation.translateY,
            });
            // If the image hasn't been scaled yet, assume we should scale from the center
            _this._state.element.style.transformOrigin =
                originX === 0 && originY === 0 ? 'center' : originX + "px " + originY + "px";
            _this._state.element.style.transform = _this.getMatrix({ scale: scale, translateX: translateX, translateY: translateY });
            _this._state.transformation = {
                originX: originX,
                originY: originY,
                translateX: translateX,
                translateY: translateY,
                scale: scaleFactor,
            };
            // Ensure range input updated after transformations
            _this._updateRangeValue();
        };
        this._updateRangeValue = function () {
            // Update Range Input
            if (_this._options.rangeElement) {
                var el = _this._options.rangeElement;
                // Range input values are strings, so we need to convert the numeric scale back to a string
                var scale = _this._round(_this._state.transformation.scale).toString();
                // No need to update the value if it's the same
                if (el.value !== scale) {
                    el.value = scale;
                }
            }
        };
        this._round = function (num, digits) {
            if (digits === void 0) { digits = 2; }
            return Number(Math.round(+(num + 'e' + digits)) + 'e-' + digits);
        };
        this._initPassiveSupport = function () {
            var supported = false;
            var options = {};
            try {
                options = {
                    get passive() {
                        supported = true;
                        return null;
                    }
                };
                var callback = function () {
                    return null;
                };
                window.addEventListener('IZTest', callback, options);
                window.removeEventListener('IZTest', callback, options);
            }
            catch (err) {
                supported = false;
            }
            ;
            return supported;
        };
        this._passiveSupportOption = function (usePassive) {
            if (usePassive === void 0) { usePassive = false; }
            return _this._isPassiveSupported ? { passive: usePassive } : usePassive;
        };
        this._element = element;
        this._options = tslib_1.__assign(tslib_1.__assign({}, this.defaults), options);
        this._originPoint = {
            x: 0,
            y: 0,
        };
        this._state = this._initState();
        this._isPassiveSupported = this._initPassiveSupport();
        this._instance = this._initInstance();
        this._initEventListeners();
    }
    return ImageZoom;
}());
exports.default = ImageZoom;


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var ImageZoom_1 = tslib_1.__importDefault(__webpack_require__("./src/ImageZoom.ts"));
window.ImageZoom = ImageZoom_1.default;
exports.default = ImageZoom_1.default;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96b29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3pvb20vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL3pvb20vLi9zcmMvSW1hZ2Vab29tLnRzIiwid2VicGFjazovL3pvb20vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUssT0FBTyxDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNuQixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaVdGLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2phRCxxRkFBb0M7QUFPcEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDO0FBQzdCLGtCQUFlLG1CQUFTLENBQUMiLCJmaWxlIjoiaW1hZ2V6b29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ6b29tXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInpvb21cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiem9vbVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHMgKi9cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XG5cdG1pblNjYWxlOiBudW1iZXI7XG5cdG1heFNjYWxlOiBudW1iZXI7XG5cdHNwZWVkOiBudW1iZXI7XG5cdGVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ7XG5cdHJhbmdlRWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHpvb21PdXRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdHpvb21JbkVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW5zdGFuY2Uge1xuXHRwYW5CeTogYW55O1xuXHRwYW5UbzogYW55O1xuXHR6b29tOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblx0ZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50O1xuXHRtYXhTY2FsZTogbnVtYmVyO1xuXHRtaW5TY2FsZTogbnVtYmVyO1xuXHRzcGVlZDogbnVtYmVyO1xuXHR0cmFuc2Zvcm1hdGlvbjoge1xuXHRcdG9yaWdpblg6IG51bWJlcjtcblx0XHRvcmlnaW5ZOiBudW1iZXI7XG5cdFx0c2NhbGU6IG51bWJlcjtcblx0XHR0cmFuc2xhdGVYOiBudW1iZXI7XG5cdFx0dHJhbnNsYXRlWTogbnVtYmVyO1xuXHR9O1xuXHRib3VuZHM/OiBET01SZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb2ludCB7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVpvb20ge1xuXHRfaW5zdGFuY2U6IElJbnN0YW5jZTtcblx0X2VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudDtcblx0X29wdGlvbnM6IElPcHRpb25zO1xuXHRfc3RhdGU6IElTdGF0ZTtcblx0X29yaWdpblBvaW50OiBJUG9pbnQ7XG5cdF9pc1Bhc3NpdmVTdXBwb3J0ZWQ6IGJvb2xlYW47XG5cblx0Ly8gZGVmYXVsdHMgLyBvcHRpb25zXG5cdGRlZmF1bHRzOiBJT3B0aW9ucyA9IHtcblx0XHRtaW5TY2FsZTogMSxcblx0XHRtYXhTY2FsZTogMTAsXG5cdFx0c3BlZWQ6IDEwXG5cdH07XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50LCBvcHRpb25zID0ge30pIHtcblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLl9vcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cdFx0dGhpcy5fb3JpZ2luUG9pbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9O1xuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5faW5pdFN0YXRlKCk7XG5cdFx0dGhpcy5faXNQYXNzaXZlU3VwcG9ydGVkID0gdGhpcy5faW5pdFBhc3NpdmVTdXBwb3J0KCk7XG5cdFx0dGhpcy5faW5zdGFuY2UgPSB0aGlzLl9pbml0SW5zdGFuY2UoKTtcblx0XHR0aGlzLl9pbml0RXZlbnRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdF9pbml0U3RhdGUgPSAoKTogSVN0YXRlID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWxlbWVudDogdGhpcy5fZWxlbWVudCxcblx0XHRcdG1pblNjYWxlOiB0aGlzLl9vcHRpb25zLm1pblNjYWxlLFxuXHRcdFx0bWF4U2NhbGU6IHRoaXMuX29wdGlvbnMubWF4U2NhbGUsXG5cdFx0XHRzcGVlZDogdGhpcy5fb3B0aW9ucy5zcGVlZCxcblx0XHRcdHRyYW5zZm9ybWF0aW9uOiB7XG5cdFx0XHRcdG9yaWdpblg6IDAsXG5cdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdHRyYW5zbGF0ZVg6IDAsXG5cdFx0XHRcdHRyYW5zbGF0ZVk6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLCAvLyBTY2FsZSBGYWN0b3IgMToxXG5cdFx0XHR9LFxuXHRcdFx0Ym91bmRzOiB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdH07XG5cdH1cblxuXHRfaW5pdEluc3RhbmNlID0gKCk6IElJbnN0YW5jZSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY2FuWm9vbSh0aGlzLl9zdGF0ZSksIHRoaXMuY2FuUGFuKHRoaXMuX3N0YXRlKSk7XG5cdH1cblxuXHRfaW5pdEV2ZW50TGlzdGVuZXJzID0gKCk6IHZvaWQgPT4ge1xuXHRcdC8vIFpvb20gSW4gRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnpvb21JbkVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsID0gdGhpcy5fb3B0aW9ucy56b29tSW5FbGVtZW50O1xuXHRcdFx0bGV0IHRpbWVyaWQ6IGFueTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnpvb21JbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIExvbmcgcHJlc3MgPSBjb250aW51ZSB6b29taW5nIGluXG5cdFx0XHR0aGlzLm9uKGVsLCAnbW91c2Vkb3duJywgKCkgPT4ge1xuXHRcdFx0XHR0aW1lcmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuem9vbUluKCk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFpvb20gT3V0IEVsZW1lbnRcblx0XHRpZiAodGhpcy5fb3B0aW9ucy56b29tT3V0RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLl9vcHRpb25zLnpvb21PdXRFbGVtZW50O1xuXHRcdFx0bGV0IHRpbWVyaWQ6IGFueTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnpvb21PdXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBMb25nIHByZXNzID0gY29udGludWUgem9vbWluZyBvdXRcblx0XHRcdHRoaXMub24oZWwsICdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0XHRcdHRpbWVyaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy56b29tT3V0KCk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFJhbmdlIEVsZW1lbnRcblx0XHRpZiAodGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsOiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQ7XG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgcmFuZ2UgaW5wdXQgdG8gbWF0Y2ggb3B0aW9uc1xuXHRcdFx0XHRlbC5taW4gPSB0aGlzLl9vcHRpb25zLm1pblNjYWxlLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGVsLm1heCA9IHRoaXMuX29wdGlvbnMubWF4U2NhbGUudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwuc3RlcCA9ICh0aGlzLl9vcHRpb25zLnNwZWVkICogMC4wMDEpLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGVsLmRlZmF1bHRWYWx1ZSA9IGVsLm1pbjtcblxuXHRcdFx0Ly8gUmFuZ2UgSW5wdXQgRXZlbnQgSGFuZGxlclxuXHRcdFx0dGhpcy5vbihlbCwgJ2lucHV0JywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyB2YWx1ZSBmcm9tIHJhbmdlIGlucHV0IGlzIHN0b3JlZCBhcyBhIHN0cmluZywgY29udmVydCB0byBudW1iZXIgZm9yIGNvbXB1dGF0aW9uXG5cdFx0XHRcdGNvbnN0IHNjYWxlRmFjdG9yID0gTnVtYmVyKGVsLnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgZGVsdGFTY2FsZSA9IHNjYWxlRmFjdG9yID4gdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgPyAxIDogLTE7XG5cdFx0XHRcdHRoaXMuX3pvb20oZGVsdGFTY2FsZSwgc2NhbGVGYWN0b3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gRG91YmxlIENsaWNrID0gUmVzZXRcblx0XHR0aGlzLm9uKHRoaXMuX2VsZW1lbnQsICdkYmxjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuX2luc3RhbmNlLnBhblRvKHtcblx0XHRcdFx0b3JpZ2luWDogMCxcblx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gUmVzZXQgb3JpZ2luIHBvaW50XG5cdFx0XHR0aGlzLl9vcmlnaW5Qb2ludCA9IHtcblx0XHRcdFx0eDogMCxcblx0XHRcdFx0eTogMFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gUmVzZXQgUmFuZ2UgU2xpZGVyIElucHV0XG5cdFx0XHRpZiAodGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQudmFsdWUgPSAnMCc7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBXaGVlbCA9IHpvb20gaW4vb3V0XG5cdFx0dGhpcy5vbih0aGlzLl9lbGVtZW50LCAnd2hlZWwnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5faW5zdGFuY2Uuem9vbSh7XG5cdFx0XHRcdGRlbHRhU2NhbGU6IE1hdGguc2lnbihldmVudC5kZWx0YVkpID4gMCA/IC0xIDogMSxcblx0XHRcdFx0eDogZXZlbnQucGFnZVgsXG5cdFx0XHRcdHk6IGV2ZW50LnBhZ2VZXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Ly8gU2hpZnQgS2V5ICsgTW91c2UgTW92ZSA9IERyYWcvTW92ZVxuXHRcdHRoaXMub24odGhpcy5fZWxlbWVudCwgJ21vdXNlbW92ZScsIChldmVudDogYW55KSA9PiB7XG5cdFx0XHRpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5faW5zdGFuY2UucGFuQnkoe1xuXHRcdFx0XHRvcmlnaW5YOiBldmVudC5tb3ZlbWVudFgsXG5cdFx0XHRcdG9yaWdpblk6IGV2ZW50Lm1vdmVtZW50WVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHR6b29tSW4gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2NhbGVGYWN0b3IgPSB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSArICgxIC8gdGhpcy5fb3B0aW9ucy5zcGVlZCk7XG5cdFx0dGhpcy5fem9vbSgxLCBzY2FsZUZhY3Rvcik7XG5cdH1cblxuXHR6b29tT3V0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHNjYWxlRmFjdG9yID0gdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgKyAoLTEgLyB0aGlzLl9vcHRpb25zLnNwZWVkKTtcblx0XHR0aGlzLl96b29tKC0xLCBzY2FsZUZhY3Rvcik7XG5cdH1cblxuXHRjYW5ab29tID0gKHN0YXRlOiBJU3RhdGUpOiBhbnkgPT4ge1xuXHRcdHJldHVybiAoe1xuXHRcdFx0em9vbTogKHsgeCwgeSwgZGVsdGFTY2FsZSB9KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBzdGF0ZS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCB7IG1pblNjYWxlLCBtYXhTY2FsZSwgc3BlZWQgfSA9IHN0YXRlO1xuXHRcdFx0XHRjb25zdCBbc2NhbGUsIG5ld1NjYWxlXSA9IHRoaXMuZ2V0U2NhbGUoeyBzY2FsZTogc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUsIGRlbHRhU2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSwgc3BlZWQgfSk7XG5cdFx0XHRcdGNvbnN0IG9yaWdpblggPSB4IC0gbGVmdDtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luWSA9IHkgLSB0b3A7XG5cdFx0XHRcdGNvbnN0IG5ld09yaWdpblggPSBvcmlnaW5YIC8gc2NhbGU7XG5cdFx0XHRcdGNvbnN0IG5ld09yaWdpblkgPSBvcmlnaW5ZIC8gc2NhbGU7XG5cdFx0XHRcdGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKHsgc2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSB9KTtcblx0XHRcdFx0Y29uc3QgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZSh7IHBvczogb3JpZ2luWCwgcHJldlBvczogc3RhdGUudHJhbnNmb3JtYXRpb24ub3JpZ2luWCwgdHJhbnNsYXRlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYIH0pO1xuXHRcdFx0XHRjb25zdCB0cmFuc2xhdGVZID0gdHJhbnNsYXRlKHsgcG9zOiBvcmlnaW5ZLCBwcmV2UG9zOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5ZLCB0cmFuc2xhdGU6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVkgfSk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGltYWdlIGhhc24ndCBiZWVuIHNjYWxlZCB5ZXQsIGFzc3VtZSB3ZSBzaG91bGQgc2NhbGUgZnJvbSB0aGUgY2VudGVyXG5cdFx0XHRcdHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID1cblx0XHRcdFx0XHRuZXdPcmlnaW5YID09PSAwICYmIG5ld09yaWdpblkgPT09IDBcblx0XHRcdFx0XHRcdD8gJ2NlbnRlcidcblx0XHRcdFx0XHRcdDogYCR7bmV3T3JpZ2luWH1weCAke25ld09yaWdpbll9cHhgO1xuXG5cdFx0XHRcdHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRNYXRyaXgoeyBzY2FsZTogbmV3U2NhbGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkgfSk7XG5cdFx0XHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uID0geyBvcmlnaW5YOiBuZXdPcmlnaW5YLCBvcmlnaW5ZOiBuZXdPcmlnaW5ZLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZTogbmV3U2NhbGUgfTtcblx0XHRcdFx0c3RhdGUuYm91bmRzID0gc3RhdGUuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBDYWxjdWxhdGVkIE9yaWdpbiBQb2ludCBhbmQgc3RvcmUgaXQgZm9yIHVzZSBlbHNld2hlcmUgYXMgbmVlZGVkXG5cdFx0XHRcdGNvbnN0IG5ld09yaWdpbnMgPSBzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbjtcblx0XHRcdFx0Y29uc3QgYXJyT3JpZ2luczogYW55W10gPSBuZXdPcmlnaW5zLnNwbGl0KCcgJyk7XG5cblx0XHRcdFx0YXJyT3JpZ2lucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcblx0XHRcdFx0XHRjb25zdCB0ZW1wID0gZWxlbWVudC5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdFx0XHRhcnJheVtpbmRleF0gPSBOdW1iZXIodGVtcCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuX29yaWdpblBvaW50ID0ge1xuXHRcdFx0XHRcdHg6IGFyck9yaWdpbnNbMF0sXG5cdFx0XHRcdFx0eTogYXJyT3JpZ2luc1sxXVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuX3VwZGF0ZVJhbmdlVmFsdWUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRwYW4gPSAoeyBzdGF0ZSwgb3JpZ2luWCwgb3JpZ2luWSB9KTogdm9pZCA9PiB7XG5cdFx0c3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCArPSBvcmlnaW5YO1xuXHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVkgKz0gb3JpZ2luWTtcblx0XHRzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHR0aGlzLmdldE1hdHJpeCh7XG5cdFx0XHRcdHNjYWxlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSxcblx0XHRcdFx0dHJhbnNsYXRlWDogc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCxcblx0XHRcdFx0dHJhbnNsYXRlWTogc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWVxuXHRcdFx0fSk7XG5cdH07XG5cblx0Y2FuUGFuID0gKHN0YXRlOiBJU3RhdGUpOiBhbnkgPT4ge1xuXHRcdHJldHVybiAoe1xuXHRcdFx0cGFuQnk6ICh7IG9yaWdpblgsIG9yaWdpblkgfSk6IGFueSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBhbih7IHN0YXRlLCBvcmlnaW5YLCBvcmlnaW5ZIH0pO1xuXHRcdFx0fSxcblx0XHRcdHBhblRvOiAoeyBvcmlnaW5YLCBvcmlnaW5ZLCBzY2FsZSB9KTogYW55ID0+IHtcblx0XHRcdFx0c3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgPSBzY2FsZTtcblx0XHRcdFx0dGhpcy5wYW4oe1xuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdG9yaWdpblg6IG9yaWdpblggLSBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYLFxuXHRcdFx0XHRcdG9yaWdpblk6IG9yaWdpblkgLSBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRnZXRNYXRyaXggPSAoeyBzY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSB9KTogc3RyaW5nID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zXG5cdFx0cmV0dXJuIGBtYXRyaXgoJHtzY2FsZX0sIDAsIDAsICR7c2NhbGV9LCAke3RyYW5zbGF0ZVh9LCAke3RyYW5zbGF0ZVl9KWA7XG5cdH07XG5cblx0Z2V0U2NhbGUgPSAoeyBzY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCwgZGVsdGFTY2FsZSB9KTogYW55ID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHNcblx0XHRsZXQgbmV3U2NhbGUgPSBzY2FsZSArIChkZWx0YVNjYWxlIC8gKHNwZWVkIC8gc2NhbGUpKTtcblx0XHRuZXdTY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLCBNYXRoLm1pbihuZXdTY2FsZSwgbWF4U2NhbGUpKTtcblxuXHRcdHJldHVybiBbdGhpcy5fcm91bmQoc2NhbGUpLCB0aGlzLl9yb3VuZChuZXdTY2FsZSldO1xuXHR9O1xuXG5cdHZhbHVlSW5SYW5nZSA9ICh7IG1pblNjYWxlLCBtYXhTY2FsZSwgc2NhbGUgfSk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBzY2FsZSA8PSBtYXhTY2FsZSAmJiBzY2FsZSA+PSBtaW5TY2FsZTtcblx0fTtcblxuXHRoYXNQb3NpdGlvbkNoYW5nZWQgPSAoeyBwb3MsIHByZXZQb3MgfSk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBwb3MgIT09IHByZXZQb3M7XG5cdH07XG5cblx0Z2V0VHJhbnNsYXRlID0gKHsgbWluU2NhbGUsIG1heFNjYWxlLCBzY2FsZSB9KTogYW55ID0+IHtcblx0XHRyZXR1cm4gKHsgcG9zLCBwcmV2UG9zLCB0cmFuc2xhdGUgfSkgPT4ge1xuXHRcdFx0LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuKi9cblx0XHRcdHJldHVybiB0aGlzLnZhbHVlSW5SYW5nZSh7IG1pblNjYWxlLCBtYXhTY2FsZSwgc2NhbGUgfSlcblx0XHRcdFx0JiYgdGhpcy5oYXNQb3NpdGlvbkNoYW5nZWQoeyBwb3MsIHByZXZQb3MgfSlcblx0XHRcdFx0PyAodHJhbnNsYXRlICsgKChwb3MgLSBwcmV2UG9zKSAqIHNjYWxlKSkgKiAoKDEgLSAxKSAvIHNjYWxlKVxuXHRcdFx0XHQ6IHRyYW5zbGF0ZTtcblx0XHR9O1xuXHR9O1xuXG5cdGdldFRvdWNoUG9pbnRzRGlzdGFuY2UgPSAodG91Y2hlczogYW55KTogbnVtYmVyID0+IHtcblx0XHRjb25zdCB0b3VjaDAgPSB0b3VjaGVzWzBdO1xuXHRcdGNvbnN0IHRvdWNoMSA9IHRvdWNoZXNbMV07XG5cdFx0cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0b3VjaDEucGFnZVggLSB0b3VjaDAucGFnZVgsIDIpICsgTWF0aC5wb3codG91Y2gxLnBhZ2VZIC0gdG91Y2gwLnBhZ2VZLCAyKSk7XG5cdH1cblxuXHQvLyBDdXN0b20gRXZlbnQgUmVnaXN0cmF0aW9uIE1ldGhvZCwgZW5zdXJlcyBldmVudExpc3RlbmVycyBhcmUgYWxzbyByZW1vdmVkIDspXG5cdG9uID0gKHRhcmdldDogRXZlbnRUYXJnZXQsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIG9wdGlvbnM/OiBhbnkpOiBFdmVudExpc3RlbmVyID0+IHtcblx0XHRjb25zdCBvcHRzID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB0aGlzLl9wYXNzaXZlU3VwcG9ydE9wdGlvbigpO1xuXG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdHMpO1xuXG5cdFx0cmV0dXJuICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRzKTtcblx0XHR9O1xuXHR9XG5cblx0X3pvb20gPSAoZGVsdGFTY2FsZTogbnVtYmVyLCBzY2FsZUZhY3RvciA9IDEpOiB2b2lkID0+IHtcblx0XHRzY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yIDwgdGhpcy5fb3B0aW9ucy5taW5TY2FsZVxuXHRcdFx0PyB0aGlzLl9vcHRpb25zLm1pblNjYWxlXG5cdFx0XHQ6IHNjYWxlRmFjdG9yID4gdGhpcy5fb3B0aW9ucy5tYXhTY2FsZVxuXHRcdFx0XHQ/IHRoaXMuX29wdGlvbnMubWF4U2NhbGVcblx0XHRcdFx0OiBzY2FsZUZhY3RvcjtcblxuXHRcdGNvbnN0IHsgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCB9ID0gdGhpcy5fc3RhdGU7XG5cdFx0Y29uc3QgW3NjYWxlLCBuZXdTY2FsZV0gPSB0aGlzLmdldFNjYWxlKHtcblx0XHRcdHNjYWxlOiBzY2FsZUZhY3Rvcixcblx0XHRcdGRlbHRhU2NhbGUsXG5cdFx0XHRtaW5TY2FsZSxcblx0XHRcdG1heFNjYWxlLFxuXHRcdFx0c3BlZWQsXG5cdFx0fSk7XG5cblx0XHRjb25zdCBvcmlnaW5YID0gdGhpcy5fb3JpZ2luUG9pbnQueDtcblx0XHRjb25zdCBvcmlnaW5ZID0gdGhpcy5fb3JpZ2luUG9pbnQueTtcblx0XHRjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmdldFRyYW5zbGF0ZSh7IHNjYWxlLCBtaW5TY2FsZSwgbWF4U2NhbGUgfSk7XG5cdFx0Y29uc3QgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZSh7XG5cdFx0XHRwb3M6IG9yaWdpblgsXG5cdFx0XHRwcmV2UG9zOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5YLFxuXHRcdFx0dHJhbnNsYXRlOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUoe1xuXHRcdFx0cG9zOiBvcmlnaW5ZLFxuXHRcdFx0cHJldlBvczogdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24ub3JpZ2luWSxcblx0XHRcdHRyYW5zbGF0ZTogdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWSxcblx0XHR9KTtcblxuXHRcdC8vIElmIHRoZSBpbWFnZSBoYXNuJ3QgYmVlbiBzY2FsZWQgeWV0LCBhc3N1bWUgd2Ugc2hvdWxkIHNjYWxlIGZyb20gdGhlIGNlbnRlclxuXHRcdHRoaXMuX3N0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID1cblx0XHRcdG9yaWdpblggPT09IDAgJiYgb3JpZ2luWSA9PT0gMCA/ICdjZW50ZXInIDogYCR7b3JpZ2luWH1weCAke29yaWdpbll9cHhgO1xuXG5cdFx0dGhpcy5fc3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldE1hdHJpeCh7IHNjYWxlOiBzY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSB9KTtcblx0XHR0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbiA9IHtcblx0XHRcdG9yaWdpblg6IG9yaWdpblgsXG5cdFx0XHRvcmlnaW5ZOiBvcmlnaW5ZLFxuXHRcdFx0dHJhbnNsYXRlWCxcblx0XHRcdHRyYW5zbGF0ZVksXG5cdFx0XHRzY2FsZTogc2NhbGVGYWN0b3IsXG5cdFx0fTtcblxuXHRcdC8vIEVuc3VyZSByYW5nZSBpbnB1dCB1cGRhdGVkIGFmdGVyIHRyYW5zZm9ybWF0aW9uc1xuXHRcdHRoaXMuX3VwZGF0ZVJhbmdlVmFsdWUoKTtcblx0fVxuXG5cdF91cGRhdGVSYW5nZVZhbHVlID0gKCk6IHZvaWQgPT4ge1xuXHRcdC8vIFVwZGF0ZSBSYW5nZSBJbnB1dFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudDtcblx0XHRcdC8vIFJhbmdlIGlucHV0IHZhbHVlcyBhcmUgc3RyaW5ncywgc28gd2UgbmVlZCB0byBjb252ZXJ0IHRoZSBudW1lcmljIHNjYWxlIGJhY2sgdG8gYSBzdHJpbmdcblx0XHRcdGNvbnN0IHNjYWxlOiBzdHJpbmcgPSB0aGlzLl9yb3VuZCh0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSkudG9TdHJpbmcoKTtcblxuXHRcdFx0Ly8gTm8gbmVlZCB0byB1cGRhdGUgdGhlIHZhbHVlIGlmIGl0J3MgdGhlIHNhbWVcblx0XHRcdGlmIChlbC52YWx1ZSAhPT0gc2NhbGUpIHtcblx0XHRcdFx0ZWwudmFsdWUgPSBzY2FsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfcm91bmQgPSAobnVtOiBudW1iZXIsIGRpZ2l0cyA9IDIpOiBudW1iZXIgPT4ge1xuXHRcdHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZCgrKG51bSArICdlJyArIGRpZ2l0cykpICsgJ2UtJyArIGRpZ2l0cyk7XG5cdH1cblxuXHRfaW5pdFBhc3NpdmVTdXBwb3J0ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdGxldCBzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGdldCBwYXNzaXZlKCkge1xuXHRcdFx0XHRcdHN1cHBvcnRlZCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH07XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdJWlRlc3QnLCBjYWxsYmFjaywgb3B0aW9ucyk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignSVpUZXN0JywgY2FsbGJhY2ssIG9wdGlvbnMpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0c3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHJldHVybiBzdXBwb3J0ZWQ7XG5cdH1cblxuXHRfcGFzc2l2ZVN1cHBvcnRPcHRpb24gPSAodXNlUGFzc2l2ZSA9IGZhbHNlKTogYm9vbGVhbiB8IHsgcGFzc2l2ZTogYm9vbGVhbiB9ID0+IHtcblx0XHRyZXR1cm4gdGhpcy5faXNQYXNzaXZlU3VwcG9ydGVkID8geyBwYXNzaXZlOiB1c2VQYXNzaXZlIH0gOiB1c2VQYXNzaXZlO1xuXHR9XG59XG4iLCJpbXBvcnQgSW1hZ2Vab29tIGZyb20gJy4vSW1hZ2Vab29tJztcblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHRJbWFnZVpvb206IGFueTtcblx0fVxufVxud2luZG93LkltYWdlWm9vbSA9IEltYWdlWm9vbTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlWm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=