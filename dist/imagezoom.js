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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96b29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3pvb20vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL3pvb20vLi9zcmMvSW1hZ2Vab29tLnRzIiwid2VicGFjazovL3pvb20vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Ozs7Ozs7Ozs7QUN4V0QscUZBQW9DO0FBT3BDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQVMsQ0FBQztBQUM3QixrQkFBZSxtQkFBUyxDQUFDIiwiZmlsZSI6ImltYWdlem9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiem9vbVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ6b29tXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInpvb21cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC1wbHVzLW9wZXJhbmRzICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnMge1xuXHRtaW5TY2FsZTogbnVtYmVyO1xuXHRtYXhTY2FsZTogbnVtYmVyO1xuXHRzcGVlZDogbnVtYmVyO1xuXHRlbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdHJhbmdlRWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHpvb21PdXRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdHpvb21JbkVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW5zdGFuY2Uge1xuXHRwYW5CeTogYW55O1xuXHRwYW5UbzogYW55O1xuXHR6b29tOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblx0ZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdG1heFNjYWxlOiBudW1iZXI7XG5cdG1pblNjYWxlOiBudW1iZXI7XG5cdHNwZWVkOiBudW1iZXI7XG5cdHRyYW5zZm9ybWF0aW9uOiB7XG5cdFx0b3JpZ2luWDogbnVtYmVyO1xuXHRcdG9yaWdpblk6IG51bWJlcjtcblx0XHRzY2FsZTogbnVtYmVyO1xuXHRcdHRyYW5zbGF0ZVg6IG51bWJlcjtcblx0XHR0cmFuc2xhdGVZOiBudW1iZXI7XG5cdH07XG5cdGJvdW5kcz86IERPTVJlY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvaW50IHtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlWm9vbSB7XG5cblx0X2luc3RhbmNlOiBJSW5zdGFuY2U7XG5cdF9lbGVtZW50OiBIVE1MRWxlbWVudDtcblx0X29wdGlvbnM6IElPcHRpb25zO1xuXHRfc3RhdGU6IElTdGF0ZTtcblx0X29yaWdpblBvaW50OiBJUG9pbnQ7XG5cblx0Ly8gZGVmYXVsdHMgLyBvcHRpb25zXG5cdGRlZmF1bHRzOiBJT3B0aW9ucyA9IHtcblx0XHRtaW5TY2FsZTogMSxcblx0XHRtYXhTY2FsZTogMTAsXG5cdFx0c3BlZWQ6IDEwXG5cdH07XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcblx0XHR0aGlzLl9vcmlnaW5Qb2ludCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH07XG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLl9pbml0U3RhdGUoKTtcblx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMuX2luaXRJbnN0YW5jZSgpO1xuXHRcdHRoaXMuX2luaXRFdmVudHMoKTtcblx0fVxuXG5cdF9pbml0U3RhdGUgPSAoKTpJU3RhdGUgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbGVtZW50OiB0aGlzLl9lbGVtZW50LFxuXHRcdFx0bWluU2NhbGU6IHRoaXMuX29wdGlvbnMubWluU2NhbGUsXG5cdFx0XHRtYXhTY2FsZTogdGhpcy5fb3B0aW9ucy5tYXhTY2FsZSxcblx0XHRcdHNwZWVkOiB0aGlzLl9vcHRpb25zLnNwZWVkLFxuXHRcdFx0dHJhbnNmb3JtYXRpb246IHtcblx0XHRcdFx0b3JpZ2luWDogMCxcblx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0dHJhbnNsYXRlWTogMCxcblx0XHRcdFx0c2NhbGU6IDEsIC8vIFNjYWxlIEZhY3RvciAxOjFcblx0XHRcdH0sXG5cdFx0XHRib3VuZHM6IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0fTtcblx0fVxuXG5cdF9pbml0SW5zdGFuY2UgPSAoKTpJSW5zdGFuY2UgPT4ge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNhblpvb20odGhpcy5fc3RhdGUpLCB0aGlzLmNhblBhbih0aGlzLl9zdGF0ZSkpO1xuXHR9XG5cblx0X2luaXRFdmVudHMgPSAoKTphbnkgPT4ge1xuXG5cdFx0Ly8gWm9vbSBJbiBFbGVtZW50XG5cdFx0aWYgKHRoaXMuX29wdGlvbnMuem9vbUluRWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLl9vcHRpb25zLnpvb21JbkVsZW1lbnQ7XG5cdFx0XHRsZXQgdGltZXJpZDogYW55O1xuXG5cdFx0XHR0aGlzLm9uKGVsLCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuem9vbUluKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ21vdXNlZG93bicsICgpID0+IHtcblx0XHRcdFx0dGltZXJpZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnpvb21JbigpO1xuXHRcdFx0XHR9LCAyMCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXJpZCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBab29tIE91dCBFbGVtZW50XG5cdFx0aWYgKHRoaXMuX29wdGlvbnMuem9vbU91dEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsID0gdGhpcy5fb3B0aW9ucy56b29tT3V0RWxlbWVudDtcblx0XHRcdGxldCB0aW1lcmlkOiBhbnk7XG5cblx0XHRcdHRoaXMub24oZWwsICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy56b29tT3V0KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbihlbCwgJ21vdXNlZG93bicsICgpID0+IHtcblx0XHRcdFx0dGltZXJpZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnpvb21PdXQoKTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oZWwsICdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyaWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gUmFuZ2UgRWxlbWVudFxuXHRcdGlmICh0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudDtcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSByYW5nZSBpbnB1dCB0byBtYXRjaCBvcHRpb25zXG5cdFx0XHRcdGVsLm1pbiA9IHRoaXMuX29wdGlvbnMubWluU2NhbGUudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwubWF4ID0gdGhpcy5fb3B0aW9ucy5tYXhTY2FsZS50b1N0cmluZygpO1xuXHRcdFx0XHRlbC5zdGVwID0gKHRoaXMuX29wdGlvbnMuc3BlZWQgKiAwLjAwMSkudG9TdHJpbmcoKTtcblx0XHRcdFx0ZWwuZGVmYXVsdFZhbHVlID0gZWwubWluO1xuXG5cdFx0XHQvLyBSYW5nZSBJbnB1dCBFdmVudCBIYW5kbGVyXG5cdFx0XHR0aGlzLm9uKGVsLCAnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNjYWxlRmFjdG9yID0gTnVtYmVyKGVsLnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgZGVsdGFTY2FsZSA9IHNjYWxlRmFjdG9yID4gdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgPyAxIDogLTE7XG5cdFx0XHRcdHRoaXMuX3pvb20oZGVsdGFTY2FsZSwgc2NhbGVGYWN0b3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gRG91YmxlIENsaWNrID0gcmVzZXQgYmFjayB0byAwLDAsMVxuXHRcdHRoaXMub24odGhpcy5fZWxlbWVudCwgJ2RibGNsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5faW5zdGFuY2UucGFuVG8oe1xuXHRcdFx0XHRvcmlnaW5YOiAwLFxuXHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBSZXNldCBvcmlnaW4gcG9pbnRcblx0XHRcdHRoaXMuX29yaWdpblBvaW50ID0ge1xuXHRcdFx0XHR4OiAwLFxuXHRcdFx0XHR5OiAwXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBSZXNldCBSYW5nZSBTbGlkZXIgSW5wdXRcblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLl9vcHRpb25zLnJhbmdlRWxlbWVudC52YWx1ZSA9ICcwJztcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFdoZWVsID0gem9vbSBpbi9vdXRcblx0XHR0aGlzLm9uKHRoaXMuX2VsZW1lbnQsICd3aGVlbCcsIChldmVudDogYW55KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9pbnN0YW5jZS56b29tKHtcblx0XHRcdFx0ZGVsdGFTY2FsZTogTWF0aC5zaWduKGV2ZW50LmRlbHRhWSkgPiAwID8gLTEgOiAxLFxuXHRcdFx0XHR4OiBldmVudC5wYWdlWCxcblx0XHRcdFx0eTogZXZlbnQucGFnZVlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHQvLyBTaGlmdCBLZXkgKyBNb3VzZSBNb3ZlID0gZHJhZy9tb3ZlXG5cdFx0dGhpcy5vbih0aGlzLl9lbGVtZW50LCAnbW91c2Vtb3ZlJywgKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdGlmICghZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5wYW5CeSh7XG5cdFx0XHRcdG9yaWdpblg6IGV2ZW50Lm1vdmVtZW50WCxcblx0XHRcdFx0b3JpZ2luWTogZXZlbnQubW92ZW1lbnRZXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHpvb21JbiA9ICgpID0+IHtcblx0XHRjb25zdCBzY2FsZUZhY3RvciA9IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnNjYWxlICsgKDEgLyB0aGlzLl9vcHRpb25zLnNwZWVkKTtcblx0XHR0aGlzLl96b29tKDEsIHNjYWxlRmFjdG9yKTtcblx0fVxuXG5cdHpvb21PdXQgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2NhbGVGYWN0b3IgPSB0aGlzLl9zdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSArICgtMSAvIHRoaXMuX29wdGlvbnMuc3BlZWQpO1xuXHRcdHRoaXMuX3pvb20oLTEsIHNjYWxlRmFjdG9yKTtcblx0fVxuXG5cdGNhblpvb20gPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcblx0XHR6b29tOiAoeyB4LCB5LCBkZWx0YVNjYWxlIH0pID0+IHtcblx0XHRcdGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBzdGF0ZS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgeyBtaW5TY2FsZSwgbWF4U2NhbGUsIHNwZWVkIH0gPSBzdGF0ZTtcblx0XHRcdGNvbnN0IFtzY2FsZSwgbmV3U2NhbGVdID0gdGhpcy5nZXRTY2FsZSh7IHNjYWxlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSwgZGVsdGFTY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlLCBzcGVlZCB9KTtcblx0XHRcdGNvbnN0IG9yaWdpblggPSB4IC0gbGVmdDtcblx0XHRcdGNvbnN0IG9yaWdpblkgPSB5IC0gdG9wO1xuXHRcdFx0Y29uc3QgbmV3T3JpZ2luWCA9IG9yaWdpblggLyBzY2FsZTtcblx0XHRcdGNvbnN0IG5ld09yaWdpblkgPSBvcmlnaW5ZIC8gc2NhbGU7XG5cdFx0XHRjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmdldFRyYW5zbGF0ZSh7IHNjYWxlLCBtaW5TY2FsZSwgbWF4U2NhbGUgfSk7XG5cdFx0XHRjb25zdCB0cmFuc2xhdGVYID0gdHJhbnNsYXRlKHsgcG9zOiBvcmlnaW5YLCBwcmV2UG9zOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5YLCB0cmFuc2xhdGU6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVggfSk7XG5cdFx0XHRjb25zdCB0cmFuc2xhdGVZID0gdHJhbnNsYXRlKHsgcG9zOiBvcmlnaW5ZLCBwcmV2UG9zOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5vcmlnaW5ZLCB0cmFuc2xhdGU6IHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVkgfSk7XG5cblx0XHRcdC8vIHN0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7bmV3T3JpZ2luWH1weCAke25ld09yaWdpbll9cHhgO1xuXHRcdFx0Ly8gSWYgdGhlIGltYWdlIGhhc24ndCBiZWVuIHNjYWxlZCB5ZXQsIGFzc3VtZSB3ZSBzaG91bGQgc2NhbGUgZnJvbSB0aGUgY2VudGVyXG5cdFx0XHRzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9XG5cdFx0XHRcdG5ld09yaWdpblggPT09IDAgJiYgbmV3T3JpZ2luWSA9PT0gMFxuXHRcdFx0XHRcdD8gJ2NlbnRlcidcblx0XHRcdFx0XHQ6IGAke25ld09yaWdpblh9cHggJHtuZXdPcmlnaW5ZfXB4YDtcblxuXHRcdFx0c3RhdGUuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldE1hdHJpeCh7IHNjYWxlOiBuZXdTY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSB9KTtcblx0XHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uID0geyBvcmlnaW5YOiBuZXdPcmlnaW5YLCBvcmlnaW5ZOiBuZXdPcmlnaW5ZLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZTogbmV3U2NhbGUgfTtcblx0XHRcdHN0YXRlLmJvdW5kcyA9IHN0YXRlLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdC8vIENhcHR1cmUgdGhlIENhbGN1bGF0ZWQgT3JpZ2luIFBvaW50IGFuZCBzdG9yZSBpdCBmb3IgdXNlIGVsc2V3aGVyZSBhcyBuZWVkZWRcblx0XHRcdGNvbnN0IG5ld09yaWdpbnMgPSBzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbjtcblx0XHRcdGNvbnN0IGFyck9yaWdpbnM6IGFueVtdID0gbmV3T3JpZ2lucy5zcGxpdCgnICcpO1xuXG5cdFx0XHRhcnJPcmlnaW5zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wID0gZWxlbWVudC5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdFx0YXJyYXlbaW5kZXhdID0gTnVtYmVyKHRlbXApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuX29yaWdpblBvaW50ID0ge1xuXHRcdFx0XHR4OiBhcnJPcmlnaW5zWzBdLFxuXHRcdFx0XHR5OiBhcnJPcmlnaW5zWzFdXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLl91cGRhdGVSYW5nZVZhbHVlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRwYW4gPSAoeyBzdGF0ZSwgb3JpZ2luWCwgb3JpZ2luWSB9KSA9PiB7XG5cdFx0c3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCArPSBvcmlnaW5YO1xuXHRcdHN0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVkgKz0gb3JpZ2luWTtcblx0XHRzdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHR0aGlzLmdldE1hdHJpeCh7XG5cdFx0XHRcdHNjYWxlOiBzdGF0ZS50cmFuc2Zvcm1hdGlvbi5zY2FsZSxcblx0XHRcdFx0dHJhbnNsYXRlWDogc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCxcblx0XHRcdFx0dHJhbnNsYXRlWTogc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWVxuXHRcdFx0fSk7XG5cdH07XG5cblx0Y2FuUGFuID0gKHN0YXRlOiBJU3RhdGUpID0+ICh7XG5cdFx0cGFuQnk6ICh7IG9yaWdpblgsIG9yaWdpblkgfSkgPT4gdGhpcy5wYW4oeyBzdGF0ZSwgb3JpZ2luWCwgb3JpZ2luWSB9KSxcblx0XHRwYW5UbzogKHsgb3JpZ2luWCwgb3JpZ2luWSwgc2NhbGUgfSkgPT4ge1xuXHRcdFx0c3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUgPSBzY2FsZTtcblx0XHRcdHRoaXMucGFuKHtcblx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpblggLSBzdGF0ZS50cmFuc2Zvcm1hdGlvbi50cmFuc2xhdGVYLFxuXHRcdFx0XHRvcmlnaW5ZOiBvcmlnaW5ZIC0gc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC10ZW1wbGF0ZS1leHByZXNzaW9uc1xuXHRnZXRNYXRyaXggPSAoeyBzY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSB9KSA9PiBgbWF0cml4KCR7c2NhbGV9LCAwLCAwLCAke3NjYWxlfSwgJHt0cmFuc2xhdGVYfSwgJHt0cmFuc2xhdGVZfSlgO1xuXG5cdGdldFNjYWxlID0gKHsgc2NhbGUsIG1pblNjYWxlLCBtYXhTY2FsZSwgc3BlZWQsIGRlbHRhU2NhbGUgfSkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtcGx1cy1vcGVyYW5kc1xuXHRcdGxldCBuZXdTY2FsZSA9IHNjYWxlICsgKGRlbHRhU2NhbGUgLyAoc3BlZWQgLyBzY2FsZSkpO1xuXHRcdG5ld1NjYWxlID0gTWF0aC5tYXgobWluU2NhbGUsIE1hdGgubWluKG5ld1NjYWxlLCBtYXhTY2FsZSkpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0cmV0dXJuIFt0aGlzLl9yb3VuZChzY2FsZSksIHRoaXMuX3JvdW5kKG5ld1NjYWxlKV07XG5cdH07XG5cblx0dmFsdWVJblJhbmdlID0gKHsgbWluU2NhbGUsIG1heFNjYWxlLCBzY2FsZSB9KSA9PiBzY2FsZSA8PSBtYXhTY2FsZSAmJiBzY2FsZSA+PSBtaW5TY2FsZTtcblxuXHRoYXNQb3NpdGlvbkNoYW5nZWQgPSAoeyBwb3MsIHByZXZQb3MgfSkgPT4gcG9zICE9PSBwcmV2UG9zO1xuXG5cdGdldFRyYW5zbGF0ZSA9ICh7IG1pblNjYWxlLCBtYXhTY2FsZSwgc2NhbGUgfSkgPT4gKHsgcG9zLCBwcmV2UG9zLCB0cmFuc2xhdGUgfSkgPT5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHR0aGlzLnZhbHVlSW5SYW5nZSh7IG1pblNjYWxlLCBtYXhTY2FsZSwgc2NhbGUgfSlcblx0XHRcdCYmIHRoaXMuaGFzUG9zaXRpb25DaGFuZ2VkKHsgcG9zLCBwcmV2UG9zIH0pXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHNcblx0XHRcdD8gKHRyYW5zbGF0ZSArICgocG9zIC0gcHJldlBvcykgKiBzY2FsZSkpICogKCgxIC0gMSkgLyBzY2FsZSlcblx0XHRcdDogdHJhbnNsYXRlO1xuXG5cdG9uID0gKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSBmYWxzZSkgPT4ge1xuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cdFx0fTtcblx0fVxuXG5cdF96b29tID0gKGRlbHRhU2NhbGU6IG51bWJlciwgc2NhbGVGYWN0b3IgPSAxKSA9PiB7XG5cdFx0c2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvciA8IHRoaXMuX29wdGlvbnMubWluU2NhbGVcblx0XHRcdD8gdGhpcy5fb3B0aW9ucy5taW5TY2FsZVxuXHRcdFx0OiBzY2FsZUZhY3RvciA+IHRoaXMuX29wdGlvbnMubWF4U2NhbGVcblx0XHRcdFx0PyB0aGlzLl9vcHRpb25zLm1heFNjYWxlXG5cdFx0XHRcdDogc2NhbGVGYWN0b3I7XG5cblx0XHRjb25zdCB7IG1pblNjYWxlLCBtYXhTY2FsZSwgc3BlZWQgfSA9IHRoaXMuX3N0YXRlO1xuXHRcdGNvbnN0IFtzY2FsZSwgbmV3U2NhbGVdID0gdGhpcy5nZXRTY2FsZSh7XG5cdFx0XHRzY2FsZTogc2NhbGVGYWN0b3IsXG5cdFx0XHRkZWx0YVNjYWxlLFxuXHRcdFx0bWluU2NhbGUsXG5cdFx0XHRtYXhTY2FsZSxcblx0XHRcdHNwZWVkLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgb3JpZ2luWCA9IHRoaXMuX29yaWdpblBvaW50Lng7XG5cdFx0Y29uc3Qgb3JpZ2luWSA9IHRoaXMuX29yaWdpblBvaW50Lnk7XG5cdFx0Y29uc3QgdHJhbnNsYXRlID0gdGhpcy5nZXRUcmFuc2xhdGUoeyBzY2FsZSwgbWluU2NhbGUsIG1heFNjYWxlIH0pO1xuXHRcdGNvbnN0IHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUoe1xuXHRcdFx0cG9zOiBvcmlnaW5YLFxuXHRcdFx0cHJldlBvczogdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24ub3JpZ2luWCxcblx0XHRcdHRyYW5zbGF0ZTogdGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24udHJhbnNsYXRlWCxcblx0XHR9KTtcblx0XHRjb25zdCB0cmFuc2xhdGVZID0gdHJhbnNsYXRlKHtcblx0XHRcdHBvczogb3JpZ2luWSxcblx0XHRcdHByZXZQb3M6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLm9yaWdpblksXG5cdFx0XHR0cmFuc2xhdGU6IHRoaXMuX3N0YXRlLnRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0ZVksXG5cdFx0fSk7XG5cblx0XHQvLyBJZiB0aGUgaW1hZ2UgaGFzbid0IGJlZW4gc2NhbGVkIHlldCwgYXNzdW1lIHdlIHNob3VsZCBzY2FsZSBmcm9tIHRoZSBjZW50ZXJcblx0XHR0aGlzLl9zdGF0ZS5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9XG5cdFx0XHRvcmlnaW5YID09PSAwICYmIG9yaWdpblkgPT09IDAgPyAnY2VudGVyJyA6IGAke29yaWdpblh9cHggJHtvcmlnaW5ZfXB4YDtcblxuXHRcdHRoaXMuX3N0YXRlLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRNYXRyaXgoeyBzY2FsZTogc2NhbGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkgfSk7XG5cdFx0dGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24gPSB7XG5cdFx0XHRvcmlnaW5YOiBvcmlnaW5YLFxuXHRcdFx0b3JpZ2luWTogb3JpZ2luWSxcblx0XHRcdHRyYW5zbGF0ZVgsXG5cdFx0XHR0cmFuc2xhdGVZLFxuXHRcdFx0c2NhbGU6IHNjYWxlRmFjdG9yLFxuXHRcdH07XG5cblx0XHR0aGlzLl91cGRhdGVSYW5nZVZhbHVlKCk7XG5cdH1cblxuXHRfdXBkYXRlUmFuZ2VWYWx1ZSA9ICgpID0+IHtcblx0XHQvLyBVcGRhdGUgUmFuZ2UgSW5wdXRcblx0XHRpZiAodGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IGVsOiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5fb3B0aW9ucy5yYW5nZUVsZW1lbnQ7XG5cdFx0XHRjb25zdCBzY2FsZTogc3RyaW5nID0gdGhpcy5fcm91bmQodGhpcy5fc3RhdGUudHJhbnNmb3JtYXRpb24uc2NhbGUpLnRvU3RyaW5nKCk7XG5cblx0XHRcdGlmIChlbC52YWx1ZSAhPT0gc2NhbGUpIHtcblx0XHRcdFx0ZWwudmFsdWUgPSBzY2FsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfcm91bmQgPSAobnVtOiBudW1iZXIsIGRpZ2l0cyA9IDIpID0+IHtcblx0XHRyZXR1cm4gTnVtYmVyKE1hdGgucm91bmQoKyhudW0gKyAnZScgKyBkaWdpdHMpKSArICdlLScgKyBkaWdpdHMpO1xuXHR9XG59XG4iLCJpbXBvcnQgSW1hZ2Vab29tIGZyb20gJy4vSW1hZ2Vab29tJztcblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHRJbWFnZVpvb206IGFueTtcblx0fVxufVxud2luZG93LkltYWdlWm9vbSA9IEltYWdlWm9vbTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlWm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=