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
	_isPassiveSupported: boolean;

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
		this._isPassiveSupported = this._initPassiveSupport();
		this._instance = this._initInstance();
		this._initEventListeners();
	}

	_initState = (): IState => {
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

	_initInstance = (): IInstance => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Object.assign({}, this.canZoom(this._state), this.canPan(this._state));
	}

	_initEventListeners = (): void => {
		// Zoom In Element
		if (this._options.zoomInElement) {
			const el = this._options.zoomInElement;
			let timerid: any;

			this.on(el, 'click', () => {
				this.zoomIn();
			});

			// Long press = continue zooming in
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

			// Long press = continue zooming out
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
			const el: HTMLInputElement = this._options.rangeElement;
				// update the range input to match options
				el.min = this._options.minScale.toString();
				el.max = this._options.maxScale.toString();
				el.step = (this._options.speed * 0.001).toString();
				el.defaultValue = el.min;

			// Range Input Event Handler
			this.on(el, 'input', (): void => {
				// value from range input is stored as a string, convert to number for computation
				const scaleFactor = Number(el.value);
				const deltaScale = scaleFactor > this._state.transformation.scale ? 1 : -1;
				this._zoom(deltaScale, scaleFactor);
			});
		}

		// Double Click = Reset
		this.on(this._element, 'dblclick', (): void => {
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
		this.on(this._element, 'wheel', (event: any): void => {
			event.preventDefault();

			this._instance.zoom({
				deltaScale: Math.sign(event.deltaY) > 0 ? -1 : 1,
				x: event.pageX,
				y: event.pageY
			});
		});


		// Shift Key + Mouse Move = Drag/Move
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

	zoomIn = (): void => {
		const scaleFactor = this._state.transformation.scale + (1 / this._options.speed);
		this._zoom(1, scaleFactor);
	}

	zoomOut = (): void => {
		const scaleFactor = this._state.transformation.scale + (-1 / this._options.speed);
		this._zoom(-1, scaleFactor);
	}

	canZoom = (state: IState): any => {
		return ({
			zoom: ({ x, y, deltaScale }): void => {
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
	};

	pan = ({ state, originX, originY }): void => {
		state.transformation.translateX += originX;
		state.transformation.translateY += originY;
		state.element.style.transform =
			this.getMatrix({
				scale: state.transformation.scale,
				translateX: state.transformation.translateX,
				translateY: state.transformation.translateY
			});
	};

	canPan = (state: IState): any => {
		return ({
			panBy: ({ originX, originY }): any => {
				return this.pan({ state, originX, originY });
			},
			panTo: ({ originX, originY, scale }): any => {
				state.transformation.scale = scale;
				this.pan({
					state,
					originX: originX - state.transformation.translateX,
					originY: originY - state.transformation.translateY
				});
			},
		});
	};

	getMatrix = ({ scale, translateX, translateY }): string => {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		return `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;
	};

	getScale = ({ scale, minScale, maxScale, speed, deltaScale }): any => {
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		let newScale = scale + (deltaScale / (speed / scale));
		newScale = Math.max(minScale, Math.min(newScale, maxScale));

		return [this._round(scale), this._round(newScale)];
	};

	valueInRange = ({ minScale, maxScale, scale }): boolean => {
		return scale <= maxScale && scale >= minScale;
	};

	hasPositionChanged = ({ pos, prevPos }): boolean => {
		return pos !== prevPos;
	};

	getTranslate = ({ minScale, maxScale, scale }): any => {
		return ({ pos, prevPos, translate }) => {
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-return*/
			return this.valueInRange({ minScale, maxScale, scale })
				&& this.hasPositionChanged({ pos, prevPos })
				? (translate + ((pos - prevPos) * scale)) * ((1 - 1) / scale)
				: translate;
		};
	};

	getTouchPointsDistance = (touches: any): number => {
		const touch0 = touches[0];
		const touch1 = touches[1];
		return Math.sqrt(Math.pow(touch1.pageX - touch0.pageX, 2) + Math.pow(touch1.pageY - touch0.pageY, 2));
	}

	// Custom Event Registration Method, ensures eventListeners are also removed ;)
	on = (target: EventTarget, type: string, listener: EventListener, options?: any): EventListener => {
		const opts = options ? options : this._passiveSupportOption();

		target.addEventListener(type, listener, opts);

		return (): void => {
			target.removeEventListener(type, listener, opts);
		};
	}

	_zoom = (deltaScale: number, scaleFactor = 1): void => {
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

		// Ensure range input updated after transformations
		this._updateRangeValue();
	}

	_updateRangeValue = (): void => {
		// Update Range Input
		if (this._options.rangeElement) {
			const el: HTMLInputElement = this._options.rangeElement;
			// Range input values are strings, so we need to convert the numeric scale back to a string
			const scale: string = this._round(this._state.transformation.scale).toString();

			// No need to update the value if it's the same
			if (el.value !== scale) {
				el.value = scale;
			}
		}
	}

	_round = (num: number, digits = 2): number => {
		return Number(Math.round(+(num + 'e' + digits)) + 'e-' + digits);
	}

	_initPassiveSupport = (): boolean => {
		let supported = false;
		let options = {};

		try {
			options = {
				get passive() {
					supported = true;
					return null;
				}
			};

			const callback = () => {
				return null;
			};

			window.addEventListener('IZTest', callback, options);
			window.removeEventListener('IZTest', callback, options);
		} catch (err) {
			supported = false;
		};

		return supported;
	}

	_passiveSupportOption = (usePassive = false): boolean | { passive: boolean } => {
		return this._isPassiveSupported ? { passive: usePassive } : usePassive;
	}
}
