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
    defaults: IOptions;
    constructor(element: HTMLElement, options?: {});
    _initState: () => IState;
    _initInstance: () => IInstance;
    _initEvents: () => any;
    zoomIn: () => void;
    zoomOut: () => void;
    canZoom: (state: IState) => {
        zoom: ({ x, y, deltaScale }: {
            x: any;
            y: any;
            deltaScale: any;
        }) => void;
    };
    pan: ({ state, originX, originY }: {
        state: any;
        originX: any;
        originY: any;
    }) => void;
    canPan: (state: IState) => {
        panBy: ({ originX, originY }: {
            originX: any;
            originY: any;
        }) => void;
        panTo: ({ originX, originY, scale }: {
            originX: any;
            originY: any;
            scale: any;
        }) => void;
    };
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
    }) => number[];
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
    }) => ({ pos, prevPos, translate }: {
        pos: any;
        prevPos: any;
        translate: any;
    }) => any;
    on: (target: any, type: any, listener: any, options?: boolean) => () => void;
    _zoom: (deltaScale: number, scaleFactor?: number) => void;
    _updateRangeValue: () => void;
    _round: (num: number, digits?: number) => number;
}
