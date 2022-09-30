import { Metrics } from '../styles';
import { Platform } from 'react-native';
import { useWindowDimensions } from 'react-native';
export default function () {
	const isWeb = Platform.OS === 'web';
	const isIos = Platform.OS === 'ios';
	const isAndroid = Platform.OS === 'android';
	const isMobile = !isWeb;
	const { width, height, scale } = useWindowDimensions();
	const isDesktop = width > 665 && height > 600;
	const isPortrait = width <= 665 && height > width;
	const isLandscape = isDesktop === isPortrait;
	const getSize = (w = null, h = null) => {
		let size = {};
		if (w) size.width = w;
		if (h) size.height = h;
		return size;
	};
	const breaks = [
		width > 1500 ? '40%' : '20%',
		width > 768 ? 0.5 : 0.3,
		width > 775 || height < width,
		width * 0.5 > 512 ? 665 : 512,
		width > 768 ? 0.5 : 0.7,
		height * 0.15,
		height * 0.3,
		width < 920,
		width < 420,
		height - Metrics.navBarHeight * 2,
		isWeb ? height * 0.3 : height * 0.2,
	];
	return {
		width,
		height,
		scale,
		isDesktop,
		isPortrait,
		isLandscape,
		getSize,
		breaks,
		isWeb,
		isIos,
		isAndroid,
		isMobile,
	};
}
