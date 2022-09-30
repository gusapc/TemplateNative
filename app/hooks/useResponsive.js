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
	const breaks = {
		0: width > 1500 ? '40%' : '20%',
		1: width * (width > 768 ? 0.5 : 0.3),
		2: width > 775 || height < width,
		3: width * 0.5 > 512 ? 665 : 512,
		4: width * (width > 768 ? 0.5 : 0.7),
		5: height * 0.15,
		6: height * 0.3,
		7: width < 920,
		8: width < 420,
		9: height - Metrics.navBarHeight * 2,
		10: isWeb ? height * 0.3 : height * 0.2,
		length: 9
	};
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
