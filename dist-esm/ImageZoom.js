/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { __assign, __read } from "tslib";
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
                    var _c = __read(_this.getScale({ scale: state.transformation.scale, deltaScale: deltaScale, minScale: minScale, maxScale: maxScale, speed: speed }), 2), scale = _c[0], newScale = _c[1];
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
            var _b = __read(_this.getScale({
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
        this._options = __assign(__assign({}, this.defaults), options);
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
export default ImageZoom;
//# sourceMappingURL=ImageZoom.js.map