import ImageZoom from './ImageZoom';

declare global {
	interface Window {
		ImageZoom: any;
	}
}
window.ImageZoom = ImageZoom;
export default ImageZoom;
