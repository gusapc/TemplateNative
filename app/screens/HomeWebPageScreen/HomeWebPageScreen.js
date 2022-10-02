import React from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import { WebSection } from '../../components';
import styles from './HomeWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import { TextComponent, PrimaryBtn } from '../../components';
import { useTranslation, useResponsive } from '../../hooks';
import * as Linking from 'expo-linking';
export default function HomeWebPageScreen({ navigation }) {
	const { t } = useTranslation('HomeWebPageScreen');
	const { images } = useTheme();
	const { width, isDesktop, isPortrait, getSize, breaks, isWeb } = useResponsive();
	const goToAuth = (val) => {
		if (isWeb)
			Linking.openURL(
				val ? 'https://play.google.com/store/games?hl=es_MX&gl=US' : 'https://www.apple.com/mx/app-store/',
			);
		else navigation.navigate('LoginScreen', { isEmail: val });
	};

	const Btns = ({ w, h, img, txt, onPress }) =>
		isWeb ? (
			<Pressable onPress={onPress}>
				<ImageBackground resizeMode="contain" source={img} style={getSize(w, h)} />
			</Pressable>
		) : (
			<PrimaryBtn onPress={onPress} text={txt} bgColor="absBlack" colorText="absWhite" borderColor="absWhite" />
		);

	const Content = () => {
		if (isDesktop)
			return (
				<View style={[getSize(width, breaks[9]), styles.row]}>
					<View style={[getSize(breaks[1], breaks[9]), styles.centerObjects]}>
						<ImageBackground
							source={breaks[2] ? images.group1 : images.Mockup19}
							resizeMode="contain"
							style={getSize(breaks[3], 450)}
						/>
					</View>
					<View style={getSize(breaks[4], breaks[9])}>
						<View style={[getSize('100%', breaks[5]), styles.baseTopMargin, styles.justifyContentCenter]}>
							<ImageBackground resizeMode="contain" source={images.viosname} style={getSize(200, 100)} />
						</View>
						<View
							style={[
								getSize('100%', breaks[6]),
								{ paddingRight: breaks[0] },
								styles.justifyContentCenter,
							]}
						>
							<TextComponent
								color={'absWhite'}
								font="mExtraBold"
								size={breaks[7] ? 'huge' : 'xHuge'}
								text={t('phrase')}
							/>
						</View>
						<View style={[styles.row, styles.wrap, getSize('100%', breaks[5]), styles.btn1]}>
							<Btns
								onPress={() => goToAuth(true)}
								txt={t('manager')}
								img={images.playstore}
								w={300}
								h={100}
							/>
							<View style={[getSize(null, 8), styles.fullWidth]} />
							<Btns
								onPress={() => goToAuth(false)}
								txt={t('neighbor')}
								img={images.appstore}
								w={300}
								h={100}
							/>
						</View>
					</View>
				</View>
			);

		if (isPortrait)
			return (
				<View style={[styles.justifyContentSpaceBetween, getSize(width, '100%')]}>
					<View style={[getSize('100%', 100), styles.top1, styles.centerObjects]}>
						<ImageBackground resizeMode="contain" source={images.viosname} style={getSize(150, 75)} />
					</View>
					<View style={[getSize('100%', 100), styles.justifyContentCenter, styles.baseHorizontalPadding]}>
						<TextComponent
							color={'absWhite'}
							font="mExtraBold"
							align="center"
							size={breaks[8] ? 'big' : 'huge'}
							text={t('phrase')}
						/>
					</View>
					<View style={[getSize('100%', breaks[10]), styles.btn2]}>
						<Btns
							onPress={() => goToAuth(true)}
							txt={t('manager')}
							img={images.playstore}
							w={250}
							h={100}
						/>
						<Btns
							onPress={() => goToAuth(false)}
							txt={t('neighbor')}
							img={images.appstore}
							w={250}
							h={100}
						/>
					</View>
					<View style={[getSize(width, 220), styles.centerObjects]}>
						<ImageBackground
							source={images.headerMessages}
							resizeMode="contain"
							style={getSize('100%', '100%')}
						/>
					</View>
				</View>
			);

		return (
			<View
				style={[
					getSize(width, breaks[9]),
					styles.justifyContentSpaceBetween,
					styles.row,
					styles.wrap,
					styles.centerObjects,
				]}
			>
				<ImageBackground
					resizeMode="contain"
					source={images.viosname}
					style={[getSize(150, 75), styles.tinyPadding]}
				/>
				<TextComponent
					color={'absWhite'}
					font="mExtraBold"
					align="center"
					size={breaks[8] ? 'big' : 'huge'}
					text={t('phrase')}
				/>
				<Btns onPress={() => goToAuth(true)} txt={t('manager')} img={images.playstore} w={250} h={100} />
				<View style={getSize(16, 16)} />
				<Btns onPress={() => goToAuth(false)} txt={t('neighbor')} img={images.appstore} w={250} h={100} />
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<WebSection image={images.homepage}>
				<Content />
			</WebSection>
		</View>
	);
}
