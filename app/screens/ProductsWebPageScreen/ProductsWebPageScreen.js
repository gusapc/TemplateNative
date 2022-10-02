import React from 'react';
import { WebSection, TextComponent } from '../../components';
import styles from './ProductsWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import { useResponsive, useTranslation } from '../../hooks';
import { View } from 'react-native';
import { Video } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function ProductsWebPageScreen() {
	const { t } = useTranslation('ProductsWebPageScreen');
	const { images, colors } = useTheme();
	const { width, breaks, getSize, isDesktop, isMobile, isLandscape } = useResponsive();
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});
	return (
		<View style={styles.container}>
			<WebSection image={breaks[11] ? images.screen5 : images.productspage}>
				<View
					style={[
						getSize(width, breaks[9]),
						!isMobile ? styles.justifyContentSpaceAround : styles.justifyContentSpaceEvenly,
					]}
				>
					<View style={[getSize(width, breaks[5]), styles.centerObjects]}>
						{!isDesktop && isMobile && <View style={getSize(10, 48)} />}
						<TextComponent color={'absWhite'} font="mExtraBold" size={'huge'} text={'ViOS App'} />
					</View>
					<View style={getSize(width, breaks[12])}>
						<View style={{ marginHorizontal: breaks[13] }}>
							<TextComponent
								styles={styles.baseTopMargin}
								color={'absWhite'}
								font="mSemiBold"
								size={isDesktop ? 'big' : 'body'}
								align="center"
								text={t('prod')}
							/>
						</View>
					</View>
					{!isLandscape ? (
						<View style={[getSize(width, breaks[14]), styles.centerObjects]}>
							{!isDesktop && <View style={getSize(10, 48)} />}
							<Video
								ref={video}
								style={[styles.justifyContentSpaceBetween, getSize(640, '85%')]}
								source={{
									uri: 'https://firebasestorage.googleapis.com/v0/b/vios-c7ec7.appspot.com/o/y2mate.com%20-%20ViOS%20%20Vecindarios%20Inteligentes_360p.mp4?alt=media&token=fed3bda9-913e-4fdc-a7b6-521c9e1b7a02',
								}}
								useNativeControls
								resizeMode="contain"
								isLooping
								onPlaybackStatusUpdate={(status) => setStatus(() => status)}
							/>
							{!isDesktop && (
								<Feather
									style={styles.baseMargin}
									name={status.isPlaying ? 'pause' : 'play'}
									size={40}
									onPress={() =>
										status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
									}
									color={colors.absWhite}
								/>
							)}
						</View>
					) : (
						<View style={[getSize(width, null), styles.centerObjects]}>
							<Feather
								style={styles.baseMargin}
								name={'play'}
								size={40}
								onPress={() => Linking.openURL('https://www.youtube.com/watch?v=wCBjucPJLd0')}
								color={colors.absWhite}
							/>
						</View>
					)}
					{isMobile && <View style={getSize(10, 48)} />}
				</View>
			</WebSection>
		</View>
	);
}
