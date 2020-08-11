# ImageZoom.js

Image resizing using mouse wheel, range input slider and other elements to control scaling/zooming of images.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/stevewithington/imagezoomjs)
[![GitHub stars](https://img.shields.io/github/stars/stevewithington/imagezoomjs)](https://github.com/stevewithington/imagezoomjs/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/stevewithington/imagezoomjs)](https://github.com/stevewithington/imagezoomjs/issues)
[![GitHub forks](https://img.shields.io/github/forks/stevewithington/imagezoomjs)](https://github.com/stevewithington/imagezoomjs/network)

## Demo

* [Bootstrap Card + Bootstrap Modal](https://stevewithington.github.io/imagezoomjs/examples/index.html)

## Installation

```cmd
npm i imagezoomjs
```

or

```cmd
yarn add imagezoomjs
```

### Babel

Babel is a next generation JavaScript compiler. One of the features is the ability to use ES6/ES2015 modules now, even though browsers do not yet support this feature natively.

```javascript
import ImageZoom from "imagezoom.js"
```

### Browserify/Webpack

There are several ways to use Browserify and Webpack. For more information on using these tools, please refer to the corresponding project's documention. In the script, including jQuery will usually look like this...

```javascript
const ImageZoom = require("imagezoom.js");
```

### AMD (Asynchronous Module Definition)

AMD is a module format built for the browser. For more information, we recommend require.js' documentation.

```javascript
define(["imagezoom.js"], (ImageZoom) => {
    // your code ...
});
```

### Vanilla JavaScript

```html
<script src="../dist/imagezoom.min.js"></script>
```

## Examples

A couple of examples are listed below. See the [demo](https://stevewithington.github.io/imagezoomjs/examples/index.html) for more details.

### Basic Usage

```html
<div id="myWindow">
    <img id="myImage" src="https://picsum.photos/2400/1400" alt="Lorem Picsum" />
</div>
```

``` javascript
const myImage = document.getElementById('myImage');
const myImageZoom = new ImageZoom(myImage);
```

### Image With Controls

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <img id="myImage src="https://picsum.photos/2400/1200" alt="Lorem Picsum" />
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="d-flex">
        <div class="col-1">
          <i data-zoom data-zoom-out class="fa fa-minus"></i>
        </div>

        <div class="col-10">
          <input data-zoom-range type="range" class="form-control-range">
        </div>

        <div class="col-1">
          <i data-zoom data-zoom-in class="fa fa-plus"></i>
        </div>
      </div>
    </div>
  </div>
</div>
```

```javascript
const myImage = document.getElementById('myImage');
const rangeElement = document.querySelector('[data-zoom-range]');
const zoomInElement = document.querySelector('[data-zoom-in]');
const zoomOutElement = document.querySelector('[data-zoom-out]');

const options = {
  rangeElement: rangeElement,
  zoomInElement: zoomInElement,
  zoomOutElement: zoomOutElement
};

const myImageZoom = new ImageZoom(myImage, options);
```

## Syntax & Parameters

The `ImageZoom` class constructor accepts up to two parameters: `element` and `options`.

```javascript
const imageZoom = new ImageZoom(element, [, options]); // -> returns ImageZoom object
```

### `element` Parameter

This is the `element` you wish to target for zooming/scaling functionality.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `element`        | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) _or_ [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)     | `null` | The target `element` or `image` to enable zooming/scaling functionality on. |

### `options` Parameter

This is an optional object with which you may alter default behavior. You may also pass in optional elements which may be enabled to control zooming/scaling of the primary element.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `minScale`      | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)          | `1`    | The minimum scale to which the image can be zoomed. `1` = 100%, `2` = 200%, etc. |
| `maxScale`       | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)          | `10`   | The maximum scale to which the image can be zoomed. `5` = 500%, `10` = 1000%, etc.  |
| `speed`          | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)           | `10`   | Speed (or scale sensitivity) with which the image will be scaled. Measured in relative units. The larger the value, the smaller the increments between each step. |
| `element`        | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) _or_ [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)     | `null` | The target `element` or `image` to enable zooming/scaling functionality on. |
| `rangeElement`   | [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) | `null` | _Optional_: The `input[type="range"]` element to control scaling/zooming. |
| `zoomOutElement` | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)       | `null` | _Optional_: An element to control zooming out. See the `Examples` section for more details. |
| `zoomInElement`  | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)      | `null` | _Optional_:  An element to control zooming in. See the `Examples` section for more details. |

### Example With `options` Parameter

```javascript
const myImage = document.getElementById('myImage');

const options = {
  minScale: 1,
  maxScale: 10,
  speed: 10
};

const myImageZoom = new ImageZoom(myImage, options);
```

## Contributors

Any contributions are welcomed. That said, this project has been through a number of iterations based on other project needs. So, it's only fair to acknowledge those whose code I have leveraged. The current iteration of this project is heavily lifted from [https://github.com/kwdowik/zoom-pan](https://github.com/kwdowik/zoom-pan). Prior iterations were also influenced by [https://github.com/worka/vanilla-js-wheel-zoom](https://github.com/worka/vanilla-js-wheel-zoom).

## License

[MIT](LICENSE.md)
