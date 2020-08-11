export interface IOptions {
    minScale: number;
    maxScale: number;
    speed: number;
    element?: HTMLElement | HTMLImageElement;
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
    element: HTMLElement | HTMLImageElement;
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
    _element: HTMLElement | HTMLImageElement;
    _options: IOptions;
    _state: IState;
    _originPoint: IPoint;
    _isPassiveSupported: boolean;
    defaults: IOptions;
    constructor(element: HTMLElement | HTMLImageElement, options?: {});
    _initState: () => IState;
    _initInstance: () => IInstance;
    _initEventListeners: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    canZoom: (state: IState) => any;
    pan: ({ state, originX, originY }: {
        state: any;
        originX: any;
        originY: any;
    }) => void;
    canPan: (state: IState) => any;
    getMatrix: ({ scale, translateX, translateY }: {
        scale: any;
        translateX: any;
        translateY: any;
    }) => string;
    getScale: ({ scale, minScale, maxScale, speed, deltaScale }: {
        scale: any;
        minScale: any;
        maxScale: any;
        speed: any;
        deltaScale: any;
    }) => any;
    valueInRange: ({ minScale, maxScale, scale }: {
        minScale: any;
        maxScale: any;
        scale: any;
    }) => boolean;
    hasPositionChanged: ({ pos, prevPos }: {
        pos: any;
        prevPos: any;
    }) => boolean;
    getTranslate: ({ minScale, maxScale, scale }: {
        minScale: any;
        maxScale: any;
        scale: any;
    }) => any;
    getTouchPointsDistance: (touches: any) => number;
    on: (target: EventTarget, type: string, listener: EventListener, options?: any) => EventListener;
    _zoom: (deltaScale: number, scaleFactor?: number) => void;
    _updateRangeValue: () => void;
    _round: (num: number, digits?: number) => number;
    _initPassiveSupport: () => boolean;
    _passiveSupportOption: (usePassive?: boolean) => boolean | {
        passive: boolean;
    };
}
