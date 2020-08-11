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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96b29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3pvb20vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL3pvb20vLi9zcmMvSW1hZ2Vab29tLnRzIiwid2VicGFjazovL3pvb20vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUssT0FBTyxDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNuQixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaVdGLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2phRCxxRkFBb0M7QUFPcEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDO0FBQzdCLGtCQUFlLG1CQUFTLENBQUMiLCJmaWxlIjoiaW1hZ2V6b29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ6b29tXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInpvb21cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiem9vbVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHMgKi9cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XG5cdG1pblNjYWxlOiBudW1iZXI7XG5cdG1heFNjYWxlOiBudW1iZXI7XG5cdHNwZWVkOiBudW1iZXI7XG5cdGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblx0cmFuZ2VFbGVtZW50PzogSFRNTElucHV0RWxlbWVudDtcblx0em9vbU91dEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblx0em9vbUluRWxlbWVudD86IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnN0YW5jZSB7XG5cdHBhbkJ5OiBhbnk7XG5cdHBhblRvOiBhbnk7XG5cdHpvb206IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXHRlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0bWF4U2NhbGU6IG51bWJlcjtcblx0bWluU2NhbGU6IG51bWJlcjtcblx0c3BlZWQ6IG51bWJlcjtcblx0dHJhbnNmb3JtYXRpb246IHtcblx0XHRvcmlnaW5YOiBudW1iZXI7XG5cdFx0b3JpZ2luWTogbnVtYmVyO1xuXHRcdHNjYWxlOiBudW1iZXI7XG5cdFx0dHJhbnNsYXRlWDogbnVtYmVyO1xuXHRcdHRyYW5zbGF0ZVk6IG51bWJlcjtcblx0fTtcblx0Ym91bmRzPzogRE9NUmVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUG9pbnQge1xuXHR4OiBudW1iZXI7XG5cdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2Vab29tIHtcblx0X2luc3RhbmNlOiBJSW5zdGFuY2U7XG5cdF9lbGVtZW50OiBIVE1MRWxlbWVudDtcblx0X29wdGlvbnM6IElPcHRpb25zO1xuXHRfc3RhdGU6IElTdGF0ZTtcblx0X29yaWdpblBvaW50OiBJUG9pbnQ7XG5cdF9pc1Bhc3NpdmVTdXBwb3J0ZWQ6IGJvb2xlYW47XG5cblx0Ly8gZGVmYXVsdHMgLyBvcHRpb25zXG5cdGRlZmF1bHRzOiBJT3B0aW9ucyA9IHtcblx0XHRtaW5TY2FsZTogMSxcblx0XHRtYXhTY2FsZTogMTAsXG5cdFx0c3BlZWQ6IDEwXG5cdH07XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcblx0XHR0aGlzLl9vcmlnaW5Qb2ludCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH07XG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLl9pbml0U3RhdGUoKTtcblx0XHR0aGlzLl9pc1Bhc3NpdmVTdXBwb3J0ZWQgPSB0aGlzLl9pbml0UGFzc2l2ZVN1cHBvcnQoKTtcblx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMuX2luaXRJbnN0YW5jZSgpO1xuXHRcdHRoaXMuX2luaXRFdmVudExpc3RlbmVycygpO1xuXHR9XG5cblx0X2luaXRTdGF0ZSA9ICgpOiBJU3RhdGUgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbGVtZW50OiB0aGlzLl9lbGVtZW50LFxuXHRcdFx0bWluU2NhbGU6IHRoaXMuX29wdGlvbnMubWluU2NhbGUsXG5cdFx0XHRtYXhTY2FsZTogdGhpcy5fb3B0aW9ucy5tYXhTY2FsZSxcblx0XHRcdHNwZWVkOiB0aGlzLl9vcHRpb25zLnNwZWVkLFxuXHRcdFx0dHJhbnNmb3JtYXRpb246IHtcblx0XHRcdFx0b3JpZ2luWDogMCxcblx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0dHJhbnNsYXRlWTogMCxcblx0XHRcdFx0c2NhbGU6IDEsIC8vIFNjYWxlIEZhY3RvciAxOjFcblx0XHRcdH0sXG5cdFx0XHRib3VuZHM6IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0fTtcblx0fVxuXG5cdF9pbml0SW5zdGFuY2UgPSAoKTogSUluc3RhbmNlID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jYW5ab29tKHRoaXMuX3N0YXRlKSwgdGhpcy5jYW5QYW4odGhpcy5fc3RhdGUpKTtcblx0fVxuXG5cdF9pbml0RXZlbnRMaXN0ZW5lcnMgPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gWm9vbSBJbiBFbGVtZW50XG5cdFx0aWYgKHRoaXMuX29wdGlvbnMuem9vbUluRWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLl9vcHRpb25zLnpvb21JbkVsZW1lbnQ7XG5cdFx0XHRsZXQgdGltZXJpZDogYW55O1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuem9vbUluKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gTG9uZyBwcmVzcyA9IGNvbnRpbnVlIHpvb21pbmcgaW5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0XHRcdHRpbWVyaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy56b29tSW4oKTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gWm9vbSBPdXQgRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnpvb21PdXRFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuX29wdGlvbnMuem9vbU91dEVsZW1lbnQ7XG5cdFx0XHRsZXQgdGltZXJpZDogYW55O1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuem9vbU91dCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIExvbmcgcHJlc3MgPSBjb250aW51ZSB6b29taW5nIG91dFxuXHRcdFx0dGhpcy5vbihlbCwgJ21vdXNlZG93bicsICgpID0+IHtcblx0XHRcdFx0dGltZXJpZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnpvb21PdXQoKTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gUmFuZ2UgRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudDtcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSByYW5nZSBpbnB1dCB0byBtYXRjaCBvcHRpb25zXG5cdFx0XHRcdGVsLm1pbiA9IHRoaXMuX29wdGlvbnMubWluU2NhbGUudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwubWF4ID0gdGhpcy5fb3B0aW9ucy5tYXhTY2FsZS50b1N0cmluZygpO1xuXHRcdFx0XHRlbC5zdGVwID0gKHRoaXMuX29wdGlvbnMuc3BlZWQgKiAwLjAwMSkudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwuZGVmYXVsdFZhbHVlID0gZWwubWluO1xuXG5cdFx0XHQvLyBSYW5nZSBJbnB1dCBFdmVudCBIYW5kbGVyXG5cdFx0XHR0aGlzLm9uKGVsLCAnaW5wdXQnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdC8vIHZhbHVlIGZyb20gcmFuZ2UgaW5wdXQgaXMgc3RvcmVkIGFzIGEgc3RyaW5nLCBjb252ZXJ0IHRvIG51bWJlciBmb3IgY29tcHV0YXRpb25cblx0XHRcdFx0Y29uc3Qgc2NhbGVGYWN0b3IgPSBOdW1iZXIoZWwudmFsdWUpO1xuXHRcdFx0XHRjb25zdCBkZWx0YVNjYWxlID0gc2NhbGVGYWN0b3IgPiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSA/IDEgOiAtMTtcblx0XHRcdFx0dGhpcy5fem9vbShkZWx0YVNjYWxlLCBzY2FsZUZhY3Rvcik7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBEb3VibGUgQ2xpY2sgPSBSZXNldFxuXHRcdHRoaXMub24odGhpcy5fZWxlbWVudCwgJ2RibGNsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5faW5zdGFuY2UucGFuVG8oe1xuXHRcdFx0XHRvcmlnaW5YOiAwLFxuXHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBSZXNldCBvcmlnaW4gcG9pbnRcblx0XHRcdHRoaXMuX29yaWdpblBvaW50ID0ge1xuXHRcdFx0XHR4OiAwLFxuXHRcdFx0XHR5OiAwXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBSZXNldCBSYW5nZSBTbGlkZXIgSW5wdXRcblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudC52YWx1ZSA9ICcwJztcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFdoZWVsID0gem9vbSBpbi9vdXRcblx0XHR0aGlzLm9uKHRoaXMuX2VsZW1lbnQsICd3aGVlbCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9pbnN0YW5jZS56b29tKHtcblx0XHRcdFx0ZGVsdGFTY2FsZTogTWF0aC5zaWduKGV2ZW50LmRlbHRhWSkgPiAwID8gLTEgOiAxLFxuXHRcdFx0XHR4OiBldmVudC5wYWdlWCxcblx0XHRcdFx0eTogZXZlbnQucGFnZVlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHQvLyBTaGlmdCBLZXkgKyBNb3VzZSBNb3ZlID0gRHJhZy9Nb3ZlXG5cdFx0dGhpcy5vbih0aGlzLl9lbGVtZW50LCAnbW91c2Vtb3ZlJywgKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdGlmICghZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5wYW5CeSh7XG5cdFx0XHRcdG9yaWdpblg6IGV2ZW50Lm1vdmVtZW50WCxcblx0XHRcdFx0b3JpZ2luWTogZXZlbnQubW92ZW1lbnRZXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHpvb21JbiA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzY2FsZUZhY3RvciA9IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlICsgKDEgLyB0aGlzLl9vcHRpb25zLnNwZWVkKTtcblx0XHR0aGlzLl96b29tKDEsIHNjYWxlRmFjdG9yKTtcblx0fVxuXG5cdHpvb21PdXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2NhbGVGYWN0b3IgPSB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSArICgtMSAvIHRoaXMuX29wdGlvbnMuc3BlZWQpO1xuXHRcdHRoaXMuX3pvb20oLTEsIHNjYWxlRmFjdG9yKTtcblx0fVxuXG5cdGNhblpvb20gPSAoc3RhdGU6IElTdGF0ZSk6IGFueSA9PiB7XG5cdFx0cmV0dXJuICh7XG5cdFx0XHR6b29tOiAoeyB4LCB5LCBkZWx0YVNjYWxlIH0pOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgeyBsZWZ0LCB0b3AgfSA9IHN0YXRlLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGNvbnN0IHsgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCB9ID0gc3RhdGU7XG5cdFx0XHRcdGNvbnN0IFtzY2FsZSwgbmV3U2NhbGVdID0gdGhpcy5nZXRTY2FsZSh7IHNjYWxlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSwgZGVsdGFTY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCB9KTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luWCA9IHggLSBsZWZ0O1xuXHRcdFx0XHRjb25zdCBvcmlnaW5ZID0geSAtIHRvcDtcblx0XHRcdFx0Y29uc3QgbmV3T3JpZ2luWCA9IG9yaWdpblggLyBzY2FsZTtcblx0XHRcdFx0Y29uc3QgbmV3T3JpZ2luWSA9IG9yaWdpblkgLyBzY2FsZTtcblx0XHRcdFx0Y29uc3QgdHJhbnNsYXRlID0gdGhpcy5nZXRUcmFuc2xhdGUoeyBzY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlIH0pO1xuXHRcdFx0XHRjb25zdCB0cmFuc2xhdGVYID0gdHJhbnNsYXRlKHsgcG9zOiBvcmlnaW5YLCBwcmV2UG9zOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5YLCB0cmFuc2xhdGU6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVggfSk7XG5cdFx0XHRcdGNvbnN0IHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUoeyBwb3M6IG9yaWdpblksIHByZXZQb3M6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLm9yaWdpblksIHRyYW5zbGF0ZTogc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWSB9KTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgaW1hZ2UgaGFzbid0IGJlZW4gc2NhbGVkIHlldCwgYXNzdW1lIHdlIHNob3VsZCBzY2FsZSBmcm9tIHRoZSBjZW50ZXJcblx0XHRcdFx0c3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPVxuXHRcdFx0XHRcdG5ld09yaWdpblggPT09IDAgJiYgbmV3T3JpZ2luWSA9PT0gMFxuXHRcdFx0XHRcdFx0PyAnY2VudGVyJ1xuXHRcdFx0XHRcdFx0OiBgJHtuZXdPcmlnaW5YfXB4ICR7bmV3T3JpZ2luWX1weGA7XG5cblx0XHRcdFx0c3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldE1hdHJpeCh7IHNjYWxlOiBuZXdTY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSB9KTtcblx0XHRcdFx0c3RhdGUudHJhbnNmb3JtYXRpb24gPSB7IG9yaWdpblg6IG5ld09yaWdpblgsIG9yaWdpblk6IG5ld09yaWdpblksIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlOiBuZXdTY2FsZSB9O1xuXHRcdFx0XHRzdGF0ZS5ib3VuZHMgPSBzdGF0ZS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdC8vIENhcHR1cmUgdGhlIENhbGN1bGF0ZWQgT3JpZ2luIFBvaW50IGFuZCBzdG9yZSBpdCBmb3IgdXNlIGVsc2V3aGVyZSBhcyBuZWVkZWRcblx0XHRcdFx0Y29uc3QgbmV3T3JpZ2lucyA9IHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luO1xuXHRcdFx0XHRjb25zdCBhcnJPcmlnaW5zOiBhbnlbXSA9IG5ld09yaWdpbnMuc3BsaXQoJyAnKTtcblxuXHRcdFx0XHRhcnJPcmlnaW5zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHRlbXAgPSBlbGVtZW50LnJlcGxhY2UoJ3B4JywgJycpO1xuXHRcdFx0XHRcdGFycmF5W2luZGV4XSA9IE51bWJlcih0ZW1wKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5fb3JpZ2luUG9pbnQgPSB7XG5cdFx0XHRcdFx0eDogYXJyT3JpZ2luc1swXSxcblx0XHRcdFx0XHR5OiBhcnJPcmlnaW5zWzFdXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5fdXBkYXRlUmFuZ2VWYWx1ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdHBhbiA9ICh7IHN0YXRlLCBvcmlnaW5YLCBvcmlnaW5ZIH0pOiB2b2lkID0+IHtcblx0XHRzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYICs9IG9yaWdpblg7XG5cdFx0c3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWSArPSBvcmlnaW5ZO1xuXHRcdHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdHRoaXMuZ2V0TWF0cml4KHtcblx0XHRcdFx0c2NhbGU6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlLFxuXHRcdFx0XHR0cmFuc2xhdGVYOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYLFxuXHRcdFx0XHR0cmFuc2xhdGVZOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZXG5cdFx0XHR9KTtcblx0fTtcblxuXHRjYW5QYW4gPSAoc3RhdGU6IElTdGF0ZSk6IGFueSA9PiB7XG5cdFx0cmV0dXJuICh7XG5cdFx0XHRwYW5CeTogKHsgb3JpZ2luWCwgb3JpZ2luWSB9KTogYW55ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFuKHsgc3RhdGUsIG9yaWdpblgsIG9yaWdpblkgfSk7XG5cdFx0XHR9LFxuXHRcdFx0cGFuVG86ICh7IG9yaWdpblgsIG9yaWdpblksIHNjYWxlIH0pOiBhbnkgPT4ge1xuXHRcdFx0XHRzdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSA9IHNjYWxlO1xuXHRcdFx0XHR0aGlzLnBhbih7XG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0b3JpZ2luWDogb3JpZ2luWCAtIHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVgsXG5cdFx0XHRcdFx0b3JpZ2luWTogb3JpZ2luWSAtIHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVlcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGdldE1hdHJpeCA9ICh7IHNjYWxlLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZIH0pOiBzdHJpbmcgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcblx0XHRyZXR1cm4gYG1hdHJpeCgke3NjYWxlfSwgMCwgMCwgJHtzY2FsZX0sICR7dHJhbnNsYXRlWH0sICR7dHJhbnNsYXRlWX0pYDtcblx0fTtcblxuXHRnZXRTY2FsZSA9ICh7IHNjYWxlLCBtaW5TY2FsZSwgbWF4U2NhbGUsIHNwZWVkLCBkZWx0YVNjYWxlIH0pOiBhbnkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtcGx1cy1vcGVyYW5kc1xuXHRcdGxldCBuZXdTY2FsZSA9IHNjYWxlICsgKGRlbHRhU2NhbGUgLyAoc3BlZWQgLyBzY2FsZSkpO1xuXHRcdG5ld1NjYWxlID0gTWF0aC5tYXgobWluU2NhbGUsIE1hdGgubWluKG5ld1NjYWxlLCBtYXhTY2FsZSkpO1xuXG5cdFx0cmV0dXJuIFt0aGlzLl9yb3VuZChzY2FsZSksIHRoaXMuX3JvdW5kKG5ld1NjYWxlKV07XG5cdH07XG5cblx0dmFsdWVJblJhbmdlID0gKHsgbWluU2NhbGUsIG1heFNjYWxlLCBzY2FsZSB9KTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIHNjYWxlIDw9IG1heFNjYWxlICYmIHNjYWxlID49IG1pblNjYWxlO1xuXHR9O1xuXG5cdGhhc1Bvc2l0aW9uQ2hhbmdlZCA9ICh7IHBvcywgcHJldlBvcyB9KTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIHBvcyAhPT0gcHJldlBvcztcblx0fTtcblxuXHRnZXRUcmFuc2xhdGUgPSAoeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNjYWxlIH0pOiBhbnkgPT4ge1xuXHRcdHJldHVybiAoeyBwb3MsIHByZXZQb3MsIHRyYW5zbGF0ZSB9KSA9PiB7XG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4qL1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVJblJhbmdlKHsgbWluU2NhbGUsIG1heFNjYWxlLCBzY2FsZSB9KVxuXHRcdFx0XHQmJiB0aGlzLmhhc1Bvc2l0aW9uQ2hhbmdlZCh7IHBvcywgcHJldlBvcyB9KVxuXHRcdFx0XHQ/ICh0cmFuc2xhdGUgKyAoKHBvcyAtIHByZXZQb3MpICogc2NhbGUpKSAqICgoMSAtIDEpIC8gc2NhbGUpXG5cdFx0XHRcdDogdHJhbnNsYXRlO1xuXHRcdH07XG5cdH07XG5cblx0Z2V0VG91Y2hQb2ludHNEaXN0YW5jZSA9ICh0b3VjaGVzOiBhbnkpOiBudW1iZXIgPT4ge1xuXHRcdGNvbnN0IHRvdWNoMCA9IHRvdWNoZXNbMF07XG5cdFx0Y29uc3QgdG91Y2gxID0gdG91Y2hlc1sxXTtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRvdWNoMS5wYWdlWCAtIHRvdWNoMC5wYWdlWCwgMikgKyBNYXRoLnBvdyh0b3VjaDEucGFnZVkgLSB0b3VjaDAucGFnZVksIDIpKTtcblx0fVxuXG5cdC8vIEN1c3RvbSBFdmVudCBSZWdpc3RyYXRpb24gTWV0aG9kLCBlbnN1cmVzIGV2ZW50TGlzdGVuZXJzIGFyZSBhbHNvIHJlbW92ZWQgOylcblx0b24gPSAodGFyZ2V0OiBFdmVudFRhcmdldCwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgb3B0aW9ucz86IGFueSk6IEV2ZW50TGlzdGVuZXIgPT4ge1xuXHRcdGNvbnN0IG9wdHMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHRoaXMuX3Bhc3NpdmVTdXBwb3J0T3B0aW9uKCk7XG5cblx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0cyk7XG5cblx0XHRyZXR1cm4gKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdHMpO1xuXHRcdH07XG5cdH1cblxuXHRfem9vbSA9IChkZWx0YVNjYWxlOiBudW1iZXIsIHNjYWxlRmFjdG9yID0gMSk6IHZvaWQgPT4ge1xuXHRcdHNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3IgPCB0aGlzLl9vcHRpb25zLm1pblNjYWxlXG5cdFx0XHQ/IHRoaXMuX29wdGlvbnMubWluU2NhbGVcblx0XHRcdDogc2NhbGVGYWN0b3IgPiB0aGlzLl9vcHRpb25zLm1heFNjYWxlXG5cdFx0XHRcdD8gdGhpcy5fb3B0aW9ucy5tYXhTY2FsZVxuXHRcdFx0XHQ6IHNjYWxlRmFjdG9yO1xuXG5cdFx0Y29uc3QgeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNwZWVkIH0gPSB0aGlzLl9zdGF0ZTtcblx0XHRjb25zdCBbc2NhbGUsIG5ld1NjYWxlXSA9IHRoaXMuZ2V0U2NhbGUoe1xuXHRcdFx0c2NhbGU6IHNjYWxlRmFjdG9yLFxuXHRcdFx0ZGVsdGFTY2FsZSxcblx0XHRcdG1pblNjYWxlLFxuXHRcdFx0bWF4U2NhbGUsXG5cdFx0XHRzcGVlZCxcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9yaWdpblggPSB0aGlzLl9vcmlnaW5Qb2ludC54O1xuXHRcdGNvbnN0IG9yaWdpblkgPSB0aGlzLl9vcmlnaW5Qb2ludC55O1xuXHRcdGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKHsgc2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSB9KTtcblx0XHRjb25zdCB0cmFuc2xhdGVYID0gdHJhbnNsYXRlKHtcblx0XHRcdHBvczogb3JpZ2luWCxcblx0XHRcdHByZXZQb3M6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLm9yaWdpblgsXG5cdFx0XHR0cmFuc2xhdGU6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVgsXG5cdFx0fSk7XG5cdFx0Y29uc3QgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZSh7XG5cdFx0XHRwb3M6IG9yaWdpblksXG5cdFx0XHRwcmV2UG9zOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5ZLFxuXHRcdFx0dHJhbnNsYXRlOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZLFxuXHRcdH0pO1xuXG5cdFx0Ly8gSWYgdGhlIGltYWdlIGhhc24ndCBiZWVuIHNjYWxlZCB5ZXQsIGFzc3VtZSB3ZSBzaG91bGQgc2NhbGUgZnJvbSB0aGUgY2VudGVyXG5cdFx0dGhpcy5fc3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPVxuXHRcdFx0b3JpZ2luWCA9PT0gMCAmJiBvcmlnaW5ZID09PSAwID8gJ2NlbnRlcicgOiBgJHtvcmlnaW5YfXB4ICR7b3JpZ2luWX1weGA7XG5cblx0XHR0aGlzLl9zdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuZ2V0TWF0cml4KHsgc2NhbGU6IHNjYWxlLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZIH0pO1xuXHRcdHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uID0ge1xuXHRcdFx0b3JpZ2luWDogb3JpZ2luWCxcblx0XHRcdG9yaWdpblk6IG9yaWdpblksXG5cdFx0XHR0cmFuc2xhdGVYLFxuXHRcdFx0dHJhbnNsYXRlWSxcblx0XHRcdHNjYWxlOiBzY2FsZUZhY3Rvcixcblx0XHR9O1xuXG5cdFx0Ly8gRW5zdXJlIHJhbmdlIGlucHV0IHVwZGF0ZWQgYWZ0ZXIgdHJhbnNmb3JtYXRpb25zXG5cdFx0dGhpcy5fdXBkYXRlUmFuZ2VWYWx1ZSgpO1xuXHR9XG5cblx0X3VwZGF0ZVJhbmdlVmFsdWUgPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gVXBkYXRlIFJhbmdlIElucHV0XG5cdFx0aWYgKHRoaXMuX29wdGlvbnMucmFuZ2VFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuX29wdGlvbnMucmFuZ2VFbGVtZW50O1xuXHRcdFx0Ly8gUmFuZ2UgaW5wdXQgdmFsdWVzIGFyZSBzdHJpbmdzLCBzbyB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhlIG51bWVyaWMgc2NhbGUgYmFjayB0byBhIHN0cmluZ1xuXHRcdFx0Y29uc3Qgc2NhbGU6IHN0cmluZyA9IHRoaXMuX3JvdW5kKHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlKS50b1N0cmluZygpO1xuXG5cdFx0XHQvLyBObyBuZWVkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgaWYgaXQncyB0aGUgc2FtZVxuXHRcdFx0aWYgKGVsLnZhbHVlICE9PSBzY2FsZSkge1xuXHRcdFx0XHRlbC52YWx1ZSA9IHNjYWxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9yb3VuZCA9IChudW06IG51bWJlciwgZGlnaXRzID0gMik6IG51bWJlciA9PiB7XG5cdFx0cmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKCsobnVtICsgJ2UnICsgZGlnaXRzKSkgKyAnZS0nICsgZGlnaXRzKTtcblx0fVxuXG5cdF9pbml0UGFzc2l2ZVN1cHBvcnQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0bGV0IHN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdGxldCBvcHRpb25zID0ge307XG5cblx0XHR0cnkge1xuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0Z2V0IHBhc3NpdmUoKSB7XG5cdFx0XHRcdFx0c3VwcG9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fTtcblxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0laVGVzdCcsIGNhbGxiYWNrLCBvcHRpb25zKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdJWlRlc3QnLCBjYWxsYmFjaywgb3B0aW9ucyk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHN1cHBvcnRlZDtcblx0fVxuXG5cdF9wYXNzaXZlU3VwcG9ydE9wdGlvbiA9ICh1c2VQYXNzaXZlID0gZmFsc2UpOiBib29sZWFuIHwgeyBwYXNzaXZlOiBib29sZWFuIH0gPT4ge1xuXHRcdHJldHVybiB0aGlzLl9pc1Bhc3NpdmVTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHVzZVBhc3NpdmUgfSA6IHVzZVBhc3NpdmU7XG5cdH1cbn1cbiIsImltcG9ydCBJbWFnZVpvb20gZnJvbSAnLi9JbWFnZVpvb20nO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdEltYWdlWm9vbTogYW55O1xuXHR9XG59XG53aW5kb3cuSW1hZ2Vab29tID0gSW1hZ2Vab29tO1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2Vab29tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==