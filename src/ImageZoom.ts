/* eslint-disable @typescript-eslint/restrict-plus-operands */

export interface IOptions {
	minScale: number;
	maxScale: number;
	speed: number;
	element?: HTMLElement;
	rangeElement?: HTMLInputElement;
	zoomOutElement?: HTMLElement;
	zoomInElement?: HTMLElement;
}

export interface IInstance {
	panBy: any;
	panTo: any;
	zoom: any;
}

export interface IState {
	element: HTMLElement;
	maxScale: number;
	minScale: number;
	speed: number;
	transformation: {
		originX: number;
		originY: number;
		scale: number;
		translateX: number;
		translateY: number;
	};
	bounds?: DOMRect;
}

export interface IPoint {
	x: number;
	y: number;
}

export default class ImageZoom {

	_instance: IInstance;
	_element: HTMLElement;
	_options: IOptions;
	_state: IState;
	_originPoint: IPoint;

	// defaults / options
	defaults: IOptions = {
		minScale: 1,
		maxScale: 10,
		speed: 10
	};

	constructor(element: HTMLElement, options = {}) {
		this._element = element;
		this._options = { ...this.defaults, ...options };
		this._originPoint = {
			x: 0,
			y: 0,
		};
		this._state = this._initState();
		this._instance = this._initInstance();
		this._initEvents();
	}

	_initState = ():IState => {
		return {
			element: this._element,
			minScale: this._options.minScale,
			maxScale: this._options.maxScale,
			speed: this._options.speed,
			transformation: {
				originX: 0,
				originY: 0,
				translateX: 0,
				translateY: 0,
				scale: 1, // Scale Factor 1:1
			},
			bounds: this._element.getBoundingClientRect(),
		};
	}

	_initInstance = ():IInstance => {
		return Object.assign({}, this.canZoom(this._state), this.canPan(this._state));
	}

	_initEvents = ():any => {

		// Zoom In Element
		if (this._options.zoomInElement) {
			const el = this._options.zoomInElement;
			let timerid: any;

			this.on(el, 'click', () => {
				this.zoomIn();
			});

			this.on(el, 'mousedown', () => {
				timerid = setInterval(() => {
					this.zoomIn();
				}, 20);
			});

			this.on(el, 'mouseup', () => {
				clearInterval(timerid);
			});
		}

		// Zoom Out Element
		if (this._options.zoomOutElement) {
			const el = this._options.zoomOutElement;
			let timerid: any;

			this.on(el, 'click', () => {
				this.zoomOut();
			});

			this.on(el, 'mousedown', () => {
				timerid = setInterval(() => {
					this.zoomOut();
				}, 20);
			});

			this.on(el, 'mouseup', () => {
				clearInterval(timerid);
			});
		}

		// Range Element
		if (this._options.rangeElement) {
			const el = this._options.rangeElement;
				// update the range input to match options
				el.min = this._options.minScale.toString();
				el.max = this._options.maxScale.toString();
				el.step = (this._options.speed * 0.001).toString();
				el.defaultValue = el.min;

			// Range Input Event Handler
			this.on(el, 'input', () => {
				const scaleFactor = Number(el.value);
				const deltaScale = scaleFactor > this._state.transformation.scale ? 1 : -1;
				this._zoom(deltaScale, scaleFactor);
			});
		}

		// Double Click = reset back to 0,0,1
		this.on(this._element, 'dblclick', () => {
			this._instance.panTo({
				originX: 0,
				originY: 0,
				scale: 1,
			});

			// Reset origin point
			this._originPoint = {
				x: 0,
				y: 0
			};

			// Reset Range Slider Input
			if (this._options.rangeElement) {
				this._options.rangeElement.value = '0';
			}
		});

		// Wheel = zoom in/out
		this.on(this._element, 'wheel', (event: any) => {
			event.preventDefault();

			this._instance.zoom({
				deltaScale: Math.sign(event.deltaY) > 0 ? -1 : 1,
				x: event.pageX,
				y: event.pageY
			});
		});


		// Shift Key + Mouse Move = drag/move
		this.on(this._element, 'mousemove', (event: any) => {
			if (!event.shiftKey) {
				return;
			}

			event.preventDefault();

			this._instance.panBy({
				originX: event.movementX,
				originY: event.movementY
			});
		});
	}

	zoomIn = () => {
		const scaleFactor = this._state.transformation.scale + (1 / this._options.speed);
		this._zoom(1, scaleFactor);
	}

	zoomOut = () => {
		const scaleFactor = this._state.transformation.scale + (-1 / this._options.speed);
		this._zoom(-1, scaleFactor);
	}

	canZoom = (state: IState) => ({
		zoom: ({ x, y, deltaScale }) => {
			const { left, top } = state.element.getBoundingClientRect();
			const { minScale, maxScale, speed } = state;
			const [scale, newScale] = this.getScale({ scale: state.transformation.scale, deltaScale, minScale, maxScale, speed });
			const originX = x - left;
			const originY = y - top;
			const newOriginX = originX / scale;
			const newOriginY = originY / scale;
			const translate = this.getTranslate({ scale, minScale, maxScale });
			const translateX = translate({ pos: originX, prevPos: state.transformation.originX, translate: state.transformation.translateX });
			const translateY = translate({ pos: originY, prevPos: state.transformation.originY, translate: state.transformation.translateY });

			// state.element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;
			// If the image hasn't been scaled yet, assume we should scale from the center
			state.element.style.transformOrigin =
				newOriginX === 0 && newOriginY === 0
					? 'center'
					: `${newOriginX}px ${newOriginY}px`;

			state.element.style.transform = this.getMatrix({ scale: newScale, translateX, translateY });
			state.transformation = { originX: newOriginX, originY: newOriginY, translateX, translateY, scale: newScale };
			state.bounds = state.element.getBoundingClientRect();

			// Capture the Calculated Origin Point and store it for use elsewhere as needed
			const newOrigins = state.element.style.transformOrigin;
			const arrOrigins: any[] = newOrigins.split(' ');

			arrOrigins.forEach((element, index, array) => {
				const temp = element.replace('px', '');
				array[index] = Number(temp);
			});

			this._originPoint = {
				x: arrOrigins[0],
				y: arrOrigins[1]
			};

			this._updateRangeValue();
		}
	});

	pan = ({ state, originX, originY }) => {
		state.transformation.translateX += originX;
		state.transformation.translateY += originY;
		state.element.style.transform =
			this.getMatrix({
				scale: state.transformation.scale,
				translateX: state.transformation.translateX,
				translateY: state.transformation.translateY
			});
	};

	canPan = (state: IState) => ({
		panBy: ({ originX, originY }) => this.pan({ state, originX, originY }),
		panTo: ({ originX, originY, scale }) => {
			state.transformation.scale = scale;
			this.pan({
				state,
				originX: originX - state.transformation.translateX,
				originY: originY - state.transformation.translateY
			});
		},
	});

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	getMatrix = ({ scale, translateX, translateY }) => `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;

	getScale = ({ scale, minScale, maxScale, speed, deltaScale }) => {
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		let newScale = scale + (deltaScale / (speed / scale));
		newScale = Math.max(minScale, Math.min(newScale, maxScale));

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return [this._round(scale), this._round(newScale)];
	};

	valueInRange = ({ minScale, maxScale, scale }) => scale <= maxScale && scale >= minScale;

	hasPositionChanged = ({ pos, prevPos }) => pos !== prevPos;

	getTranslate = ({ minScale, maxScale, scale }) => ({ pos, prevPos, translate }) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		this.valueInRange({ minScale, maxScale, scale })
			&& this.hasPositionChanged({ pos, prevPos })
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			? (translate + ((pos - prevPos) * scale)) * ((1 - 1) / scale)
			: translate;

	on = (target, type, listener, options = false) => {
		target.addEventListener(type, listener, options);

		return () => {
			target.removeEventListener(type, listener, options);
		};
	}

	_zoom = (deltaScale: number, scaleFactor = 1) => {
		scaleFactor = scaleFactor < this._options.minScale
			? this._options.minScale
			: scaleFactor > this._options.maxScale
				? this._options.maxScale
				: scaleFactor;

		const { minScale, maxScale, speed } = this._state;
		const [scale, newScale] = this.getScale({
			scale: scaleFactor,
			deltaScale,
			minScale,
			maxScale,
			speed,
		});

		const originX = this._originPoint.x;
		const originY = this._originPoint.y;
		const translate = this.getTranslate({ scale, minScale, maxScale });
		const translateX = translate({
			pos: originX,
			prevPos: this._state.transformation.originX,
			translate: this._state.transformation.translateX,
		});
		const translateY = translate({
			pos: originY,
			prevPos: this._state.transformation.originY,
			translate: this._state.transformation.translateY,
		});

		// If the image hasn't been scaled yet, assume we should scale from the center
		this._state.element.style.transformOrigin =
			originX === 0 && originY === 0 ? 'center' : `${originX}px ${originY}px`;

		this._state.element.style.transform = this.getMatrix({ scale: scale, translateX, translateY });
		this._state.transformation = {
			originX: originX,
			originY: originY,
			translateX,
			translateY,
			scale: scaleFactor,
		};

		this._updateRangeValue();
	}

	_updateRangeValue = () => {
		// Update Range Input
		if (this._options.rangeElement) {
			const el: HTMLInputElement = this._options.rangeElement;
			const scale: string = this._round(this._state.transformation.scale).toString();

			if (el.value !== scale) {
				el.value = scale;
			}
		}
	}

	_round = (num: number, digits = 2) => {
		return Number(Math.round(+(num + 'e' + digits)) + 'e-' + digits);
	}
}
