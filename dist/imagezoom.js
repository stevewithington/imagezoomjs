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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
            return Object.assign({}, _this.canZoom(_this._state), _this.canPan(_this._state));
        };
        this._initEvents = function () {
            // Zoom In Element
            if (_this._options.zoomInElement) {
                var el = _this._options.zoomInElement;
                var timerid_1;
                _this.on(el, 'click', function () {
                    _this.zoomIn();
                });
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
                    var scaleFactor = Number(el_1.value);
                    var deltaScale = scaleFactor > _this._state.transformation.scale ? 1 : -1;
                    _this._zoom(deltaScale, scaleFactor);
                });
            }
            // Double Click = reset back to 0,0,1
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
            // Shift Key + Mouse Move = drag/move
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
        this.canZoom = function (state) { return ({
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
                // state.element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;
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
        }); };
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
        this.canPan = function (state) { return ({
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
        }); };
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.getMatrix = function (_a) {
            var scale = _a.scale, translateX = _a.translateX, translateY = _a.translateY;
            return "matrix(" + scale + ", 0, 0, " + scale + ", " + translateX + ", " + translateY + ")";
        };
        this.getScale = function (_a) {
            var scale = _a.scale, minScale = _a.minScale, maxScale = _a.maxScale, speed = _a.speed, deltaScale = _a.deltaScale;
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            var newScale = scale + (deltaScale / (speed / scale));
            newScale = Math.max(minScale, Math.min(newScale, maxScale));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return _this.valueInRange({ minScale: minScale, maxScale: maxScale, scale: scale })
                    && _this.hasPositionChanged({ pos: pos, prevPos: prevPos })
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    ? (translate + ((pos - prevPos) * scale)) * ((1 - 1) / scale)
                    : translate;
            };
        };
        this.on = function (target, type, listener, options) {
            if (options === void 0) { options = false; }
            target.addEventListener(type, listener, options);
            return function () {
                target.removeEventListener(type, listener, options);
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
            _this._updateRangeValue();
        };
        this._updateRangeValue = function () {
            // Update Range Input
            if (_this._options.rangeElement) {
                var el = _this._options.rangeElement;
                var scale = _this._round(_this._state.transformation.scale).toString();
                if (el.value !== scale) {
                    el.value = scale;
                }
            }
        };
        this._round = function (num, digits) {
            if (digits === void 0) { digits = 2; }
            return Number(Math.round(+(num + 'e' + digits)) + 'e-' + digits);
        };
        this._element = element;
        this._options = tslib_1.__assign(tslib_1.__assign({}, this.defaults), options);
        this._originPoint = {
            x: 0,
            y: 0,
        };
        this._state = this._initState();
        this._instance = this._initInstance();
        this._initEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96b29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3pvb20vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL3pvb20vLi9zcmMvSW1hZ2Vab29tLnRzIiwid2VicGFjazovL3pvb20vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Ozs7Ozs7Ozs7QUN4V0QscUZBQW9DO0FBT3BDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQVMsQ0FBQztBQUM3QixrQkFBZSxtQkFBUyxDQUFDIiwiZmlsZSI6ImltYWdlem9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiem9vbVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ6b29tXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInpvb21cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtcGx1cy1vcGVyYW5kcyAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25zIHtcblx0bWluU2NhbGU6IG51bWJlcjtcblx0bWF4U2NhbGU6IG51bWJlcjtcblx0c3BlZWQ6IG51bWJlcjtcblx0ZWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHRyYW5nZUVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50O1xuXHR6b29tT3V0RWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHR6b29tSW5FbGVtZW50PzogSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluc3RhbmNlIHtcblx0cGFuQnk6IGFueTtcblx0cGFuVG86IGFueTtcblx0em9vbTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cdGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRtYXhTY2FsZTogbnVtYmVyO1xuXHRtaW5TY2FsZTogbnVtYmVyO1xuXHRzcGVlZDogbnVtYmVyO1xuXHR0cmFuc2Zvcm1hdGlvbjoge1xuXHRcdG9yaWdpblg6IG51bWJlcjtcblx0XHRvcmlnaW5ZOiBudW1iZXI7XG5cdFx0c2NhbGU6IG51bWJlcjtcblx0XHR0cmFuc2xhdGVYOiBudW1iZXI7XG5cdFx0dHJhbnNsYXRlWTogbnVtYmVyO1xuXHR9O1xuXHRib3VuZHM/OiBET01SZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb2ludCB7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVpvb20ge1xuXG5cdF9pbnN0YW5jZTogSUluc3RhbmNlO1xuXHRfZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdF9vcHRpb25zOiBJT3B0aW9ucztcblx0X3N0YXRlOiBJU3RhdGU7XG5cdF9vcmlnaW5Qb2ludDogSVBvaW50O1xuXG5cdC8vIGRlZmF1bHRzIC8gb3B0aW9uc1xuXHRkZWZhdWx0czogSU9wdGlvbnMgPSB7XG5cdFx0bWluU2NhbGU6IDEsXG5cdFx0bWF4U2NhbGU6IDEwLFxuXHRcdHNwZWVkOiAxMFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zID0ge30pIHtcblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLl9vcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cdFx0dGhpcy5fb3JpZ2luUG9pbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9O1xuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5faW5pdFN0YXRlKCk7XG5cdFx0dGhpcy5faW5zdGFuY2UgPSB0aGlzLl9pbml0SW5zdGFuY2UoKTtcblx0XHR0aGlzLl9pbml0RXZlbnRzKCk7XG5cdH1cblxuXHRfaW5pdFN0YXRlID0gKCk6SVN0YXRlID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWxlbWVudDogdGhpcy5fZWxlbWVudCxcblx0XHRcdG1pblNjYWxlOiB0aGlzLl9vcHRpb25zLm1pblNjYWxlLFxuXHRcdFx0bWF4U2NhbGU6IHRoaXMuX29wdGlvbnMubWF4U2NhbGUsXG5cdFx0XHRzcGVlZDogdGhpcy5fb3B0aW9ucy5zcGVlZCxcblx0XHRcdHRyYW5zZm9ybWF0aW9uOiB7XG5cdFx0XHRcdG9yaWdpblg6IDAsXG5cdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdHRyYW5zbGF0ZVg6IDAsXG5cdFx0XHRcdHRyYW5zbGF0ZVk6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLCAvLyBTY2FsZSBGYWN0b3IgMToxXG5cdFx0XHR9LFxuXHRcdFx0Ym91bmRzOiB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdH07XG5cdH1cblxuXHRfaW5pdEluc3RhbmNlID0gKCk6SUluc3RhbmNlID0+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jYW5ab29tKHRoaXMuX3N0YXRlKSwgdGhpcy5jYW5QYW4odGhpcy5fc3RhdGUpKTtcblx0fVxuXG5cdF9pbml0RXZlbnRzID0gKCk6YW55ID0+IHtcblxuXHRcdC8vIFpvb20gSW4gRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnpvb21JbkVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsID0gdGhpcy5fb3B0aW9ucy56b29tSW5FbGVtZW50O1xuXHRcdFx0bGV0IHRpbWVyaWQ6IGFueTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnpvb21JbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0XHRcdHRpbWVyaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy56b29tSW4oKTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gWm9vbSBPdXQgRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnpvb21PdXRFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuX29wdGlvbnMuem9vbU91dEVsZW1lbnQ7XG5cdFx0XHRsZXQgdGltZXJpZDogYW55O1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuem9vbU91dCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0XHRcdHRpbWVyaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy56b29tT3V0KCk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcmlkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFJhbmdlIEVsZW1lbnRcblx0XHRpZiAodGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsID0gdGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQ7XG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgcmFuZ2UgaW5wdXQgdG8gbWF0Y2ggb3B0aW9uc1xuXHRcdFx0XHRlbC5taW4gPSB0aGlzLl9vcHRpb25zLm1pblNjYWxlLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGVsLm1heCA9IHRoaXMuX29wdGlvbnMubWF4U2NhbGUudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwuc3RlcCA9ICh0aGlzLl9vcHRpb25zLnNwZWVkICogMC4wMDEpLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGVsLmRlZmF1bHRWYWx1ZSA9IGVsLm1pbjtcblxuXHRcdFx0Ly8gUmFuZ2UgSW5wdXQgRXZlbnQgSGFuZGxlclxuXHRcdFx0dGhpcy5vbihlbCwgJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzY2FsZUZhY3RvciA9IE51bWJlcihlbC52YWx1ZSk7XG5cdFx0XHRcdGNvbnN0IGRlbHRhU2NhbGUgPSBzY2FsZUZhY3RvciA+IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlID8gMSA6IC0xO1xuXHRcdFx0XHR0aGlzLl96b29tKGRlbHRhU2NhbGUsIHNjYWxlRmFjdG9yKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIERvdWJsZSBDbGljayA9IHJlc2V0IGJhY2sgdG8gMCwwLDFcblx0XHR0aGlzLm9uKHRoaXMuX2VsZW1lbnQsICdkYmxjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuX2luc3RhbmNlLnBhblRvKHtcblx0XHRcdFx0b3JpZ2luWDogMCxcblx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gUmVzZXQgb3JpZ2luIHBvaW50XG5cdFx0XHR0aGlzLl9vcmlnaW5Qb2ludCA9IHtcblx0XHRcdFx0eDogMCxcblx0XHRcdFx0eTogMFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gUmVzZXQgUmFuZ2UgU2xpZGVyIElucHV0XG5cdFx0XHRpZiAodGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQudmFsdWUgPSAnMCc7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBXaGVlbCA9IHpvb20gaW4vb3V0XG5cdFx0dGhpcy5vbih0aGlzLl9lbGVtZW50LCAnd2hlZWwnLCAoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5faW5zdGFuY2Uuem9vbSh7XG5cdFx0XHRcdGRlbHRhU2NhbGU6IE1hdGguc2lnbihldmVudC5kZWx0YVkpID4gMCA/IC0xIDogMSxcblx0XHRcdFx0eDogZXZlbnQucGFnZVgsXG5cdFx0XHRcdHk6IGV2ZW50LnBhZ2VZXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Ly8gU2hpZnQgS2V5ICsgTW91c2UgTW92ZSA9IGRyYWcvbW92ZVxuXHRcdHRoaXMub24odGhpcy5fZWxlbWVudCwgJ21vdXNlbW92ZScsIChldmVudDogYW55KSA9PiB7XG5cdFx0XHRpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5faW5zdGFuY2UucGFuQnkoe1xuXHRcdFx0XHRvcmlnaW5YOiBldmVudC5tb3ZlbWVudFgsXG5cdFx0XHRcdG9yaWdpblk6IGV2ZW50Lm1vdmVtZW50WVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHR6b29tSW4gPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2NhbGVGYWN0b3IgPSB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSArICgxIC8gdGhpcy5fb3B0aW9ucy5zcGVlZCk7XG5cdFx0dGhpcy5fem9vbSgxLCBzY2FsZUZhY3Rvcik7XG5cdH1cblxuXHR6b29tT3V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNjYWxlRmFjdG9yID0gdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgKyAoLTEgLyB0aGlzLl9vcHRpb25zLnNwZWVkKTtcblx0XHR0aGlzLl96b29tKC0xLCBzY2FsZUZhY3Rvcik7XG5cdH1cblxuXHRjYW5ab29tID0gKHN0YXRlOiBJU3RhdGUpID0+ICh7XG5cdFx0em9vbTogKHsgeCwgeSwgZGVsdGFTY2FsZSB9KSA9PiB7XG5cdFx0XHRjb25zdCB7IGxlZnQsIHRvcCB9ID0gc3RhdGUuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IHsgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCB9ID0gc3RhdGU7XG5cdFx0XHRjb25zdCBbc2NhbGUsIG5ld1NjYWxlXSA9IHRoaXMuZ2V0U2NhbGUoeyBzY2FsZTogc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUsIGRlbHRhU2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSwgc3BlZWQgfSk7XG5cdFx0XHRjb25zdCBvcmlnaW5YID0geCAtIGxlZnQ7XG5cdFx0XHRjb25zdCBvcmlnaW5ZID0geSAtIHRvcDtcblx0XHRcdGNvbnN0IG5ld09yaWdpblggPSBvcmlnaW5YIC8gc2NhbGU7XG5cdFx0XHRjb25zdCBuZXdPcmlnaW5ZID0gb3JpZ2luWSAvIHNjYWxlO1xuXHRcdFx0Y29uc3QgdHJhbnNsYXRlID0gdGhpcy5nZXRUcmFuc2xhdGUoeyBzY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlIH0pO1xuXHRcdFx0Y29uc3QgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZSh7IHBvczogb3JpZ2luWCwgcHJldlBvczogc3RhdGUudHJhbnNmb3JtYXRpb24ub3JpZ2luWCwgdHJhbnNsYXRlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYIH0pO1xuXHRcdFx0Y29uc3QgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZSh7IHBvczogb3JpZ2luWSwgcHJldlBvczogc3RhdGUudHJhbnNmb3JtYXRpb24ub3JpZ2luWSwgdHJhbnNsYXRlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZIH0pO1xuXG5cdFx0XHQvLyBzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke25ld09yaWdpblh9cHggJHtuZXdPcmlnaW5ZfXB4YDtcblx0XHRcdC8vIElmIHRoZSBpbWFnZSBoYXNuJ3QgYmVlbiBzY2FsZWQgeWV0LCBhc3N1bWUgd2Ugc2hvdWxkIHNjYWxlIGZyb20gdGhlIGNlbnRlclxuXHRcdFx0c3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPVxuXHRcdFx0XHRuZXdPcmlnaW5YID09PSAwICYmIG5ld09yaWdpblkgPT09IDBcblx0XHRcdFx0XHQ/ICdjZW50ZXInXG5cdFx0XHRcdFx0OiBgJHtuZXdPcmlnaW5YfXB4ICR7bmV3T3JpZ2luWX1weGA7XG5cblx0XHRcdHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRNYXRyaXgoeyBzY2FsZTogbmV3U2NhbGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkgfSk7XG5cdFx0XHRzdGF0ZS50cmFuc2Zvcm1hdGlvbiA9IHsgb3JpZ2luWDogbmV3T3JpZ2luWCwgb3JpZ2luWTogbmV3T3JpZ2luWSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGU6IG5ld1NjYWxlIH07XG5cdFx0XHRzdGF0ZS5ib3VuZHMgPSBzdGF0ZS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHQvLyBDYXB0dXJlIHRoZSBDYWxjdWxhdGVkIE9yaWdpbiBQb2ludCBhbmQgc3RvcmUgaXQgZm9yIHVzZSBlbHNld2hlcmUgYXMgbmVlZGVkXG5cdFx0XHRjb25zdCBuZXdPcmlnaW5zID0gc3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW47XG5cdFx0XHRjb25zdCBhcnJPcmlnaW5zOiBhbnlbXSA9IG5ld09yaWdpbnMuc3BsaXQoJyAnKTtcblxuXHRcdFx0YXJyT3JpZ2lucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcCA9IGVsZW1lbnQucmVwbGFjZSgncHgnLCAnJyk7XG5cdFx0XHRcdGFycmF5W2luZGV4XSA9IE51bWJlcih0ZW1wKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9vcmlnaW5Qb2ludCA9IHtcblx0XHRcdFx0eDogYXJyT3JpZ2luc1swXSxcblx0XHRcdFx0eTogYXJyT3JpZ2luc1sxXVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5fdXBkYXRlUmFuZ2VWYWx1ZSgpO1xuXHRcdH1cblx0fSk7XG5cblx0cGFuID0gKHsgc3RhdGUsIG9yaWdpblgsIG9yaWdpblkgfSkgPT4ge1xuXHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVggKz0gb3JpZ2luWDtcblx0XHRzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZICs9IG9yaWdpblk7XG5cdFx0c3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0dGhpcy5nZXRNYXRyaXgoe1xuXHRcdFx0XHRzY2FsZTogc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUsXG5cdFx0XHRcdHRyYW5zbGF0ZVg6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVgsXG5cdFx0XHRcdHRyYW5zbGF0ZVk6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVlcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGNhblBhbiA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuXHRcdHBhbkJ5OiAoeyBvcmlnaW5YLCBvcmlnaW5ZIH0pID0+IHRoaXMucGFuKHsgc3RhdGUsIG9yaWdpblgsIG9yaWdpblkgfSksXG5cdFx0cGFuVG86ICh7IG9yaWdpblgsIG9yaWdpblksIHNjYWxlIH0pID0+IHtcblx0XHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlID0gc2NhbGU7XG5cdFx0XHR0aGlzLnBhbih7XG5cdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5YIC0gc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCxcblx0XHRcdFx0b3JpZ2luWTogb3JpZ2luWSAtIHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVlcblx0XHRcdH0pO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcblx0Z2V0TWF0cml4ID0gKHsgc2NhbGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkgfSkgPT4gYG1hdHJpeCgke3NjYWxlfSwgMCwgMCwgJHtzY2FsZX0sICR7dHJhbnNsYXRlWH0sICR7dHJhbnNsYXRlWX0pYDtcblxuXHRnZXRTY2FsZSA9ICh7IHNjYWxlLCBtaW5TY2FsZSwgbWF4U2NhbGUsIHNwZWVkLCBkZWx0YVNjYWxlIH0pID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHNcblx0XHRsZXQgbmV3U2NhbGUgPSBzY2FsZSArIChkZWx0YVNjYWxlIC8gKHNwZWVkIC8gc2NhbGUpKTtcblx0XHRuZXdTY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLCBNYXRoLm1pbihuZXdTY2FsZSwgbWF4U2NhbGUpKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRcdHJldHVybiBbdGhpcy5fcm91bmQoc2NhbGUpLCB0aGlzLl9yb3VuZChuZXdTY2FsZSldO1xuXHR9O1xuXG5cdHZhbHVlSW5SYW5nZSA9ICh7IG1pblNjYWxlLCBtYXhTY2FsZSwgc2NhbGUgfSkgPT4gc2NhbGUgPD0gbWF4U2NhbGUgJiYgc2NhbGUgPj0gbWluU2NhbGU7XG5cblx0aGFzUG9zaXRpb25DaGFuZ2VkID0gKHsgcG9zLCBwcmV2UG9zIH0pID0+IHBvcyAhPT0gcHJldlBvcztcblxuXHRnZXRUcmFuc2xhdGUgPSAoeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNjYWxlIH0pID0+ICh7IHBvcywgcHJldlBvcywgdHJhbnNsYXRlIH0pID0+XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0dGhpcy52YWx1ZUluUmFuZ2UoeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNjYWxlIH0pXG5cdFx0XHQmJiB0aGlzLmhhc1Bvc2l0aW9uQ2hhbmdlZCh7IHBvcywgcHJldlBvcyB9KVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC1wbHVzLW9wZXJhbmRzXG5cdFx0XHQ/ICh0cmFuc2xhdGUgKyAoKHBvcyAtIHByZXZQb3MpICogc2NhbGUpKSAqICgoMSAtIDEpIC8gc2NhbGUpXG5cdFx0XHQ6IHRyYW5zbGF0ZTtcblxuXHRvbiA9ICh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0gZmFsc2UpID0+IHtcblx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdH07XG5cdH1cblxuXHRfem9vbSA9IChkZWx0YVNjYWxlOiBudW1iZXIsIHNjYWxlRmFjdG9yID0gMSkgPT4ge1xuXHRcdHNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3IgPCB0aGlzLl9vcHRpb25zLm1pblNjYWxlXG5cdFx0XHQ/IHRoaXMuX29wdGlvbnMubWluU2NhbGVcblx0XHRcdDogc2NhbGVGYWN0b3IgPiB0aGlzLl9vcHRpb25zLm1heFNjYWxlXG5cdFx0XHRcdD8gdGhpcy5fb3B0aW9ucy5tYXhTY2FsZVxuXHRcdFx0XHQ6IHNjYWxlRmFjdG9yO1xuXG5cdFx0Y29uc3QgeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNwZWVkIH0gPSB0aGlzLl9zdGF0ZTtcblx0XHRjb25zdCBbc2NhbGUsIG5ld1NjYWxlXSA9IHRoaXMuZ2V0U2NhbGUoe1xuXHRcdFx0c2NhbGU6IHNjYWxlRmFjdG9yLFxuXHRcdFx0ZGVsdGFTY2FsZSxcblx0XHRcdG1pblNjYWxlLFxuXHRcdFx0bWF4U2NhbGUsXG5cdFx0XHRzcGVlZCxcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9yaWdpblggPSB0aGlzLl9vcmlnaW5Qb2ludC54O1xuXHRcdGNvbnN0IG9yaWdpblkgPSB0aGlzLl9vcmlnaW5Qb2ludC55O1xuXHRcdGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKHsgc2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSB9KTtcblx0XHRjb25zdCB0cmFuc2xhdGVYID0gdHJhbnNsYXRlKHtcblx0XHRcdHBvczogb3JpZ2luWCxcblx0XHRcdHByZXZQb3M6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLm9yaWdpblgsXG5cdFx0XHR0cmFuc2xhdGU6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVgsXG5cdFx0fSk7XG5cdFx0Y29uc3QgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZSh7XG5cdFx0XHRwb3M6IG9yaWdpblksXG5cdFx0XHRwcmV2UG9zOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5ZLFxuXHRcdFx0dHJhbnNsYXRlOiB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVZLFxuXHRcdH0pO1xuXG5cdFx0Ly8gSWYgdGhlIGltYWdlIGhhc24ndCBiZWVuIHNjYWxlZCB5ZXQsIGFzc3VtZSB3ZSBzaG91bGQgc2NhbGUgZnJvbSB0aGUgY2VudGVyXG5cdFx0dGhpcy5fc3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPVxuXHRcdFx0b3JpZ2luWCA9PT0gMCAmJiBvcmlnaW5ZID09PSAwID8gJ2NlbnRlcicgOiBgJHtvcmlnaW5YfXB4ICR7b3JpZ2luWX1weGA7XG5cblx0XHR0aGlzLl9zdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuZ2V0TWF0cml4KHsgc2NhbGU6IHNjYWxlLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZIH0pO1xuXHRcdHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uID0ge1xuXHRcdFx0b3JpZ2luWDogb3JpZ2luWCxcblx0XHRcdG9yaWdpblk6IG9yaWdpblksXG5cdFx0XHR0cmFuc2xhdGVYLFxuXHRcdFx0dHJhbnNsYXRlWSxcblx0XHRcdHNjYWxlOiBzY2FsZUZhY3Rvcixcblx0XHR9O1xuXG5cdFx0dGhpcy5fdXBkYXRlUmFuZ2VWYWx1ZSgpO1xuXHR9XG5cblx0X3VwZGF0ZVJhbmdlVmFsdWUgPSAoKSA9PiB7XG5cdFx0Ly8gVXBkYXRlIFJhbmdlIElucHV0XG5cdFx0aWYgKHRoaXMuX29wdGlvbnMucmFuZ2VFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuX29wdGlvbnMucmFuZ2VFbGVtZW50O1xuXHRcdFx0Y29uc3Qgc2NhbGU6IHN0cmluZyA9IHRoaXMuX3JvdW5kKHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlKS50b1N0cmluZygpO1xuXG5cdFx0XHRpZiAoZWwudmFsdWUgIT09IHNjYWxlKSB7XG5cdFx0XHRcdGVsLnZhbHVlID0gc2NhbGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X3JvdW5kID0gKG51bTogbnVtYmVyLCBkaWdpdHMgPSAyKSA9PiB7XG5cdFx0cmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKCsobnVtICsgJ2UnICsgZGlnaXRzKSkgKyAnZS0nICsgZGlnaXRzKTtcblx0fVxufVxuIiwiaW1wb3J0IEltYWdlWm9vbSBmcm9tICcuL0ltYWdlWm9vbSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0SW1hZ2Vab29tOiBhbnk7XG5cdH1cbn1cbndpbmRvdy5JbWFnZVpvb20gPSBJbWFnZVpvb207XG5leHBvcnQgZGVmYXVsdCBJbWFnZVpvb207XG4iXSwic291cmNlUm9vdCI6IiJ9