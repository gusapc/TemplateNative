import React from 'react';
import { View, Image, SafeAreaView, Pressable } from 'react-native';
import styles from './PageLayoutStyle';
import { BottomBarIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from '../../hooks';
import { FontAwesome } from '@expo/vector-icons';
import {  useResponsive } from '../../hooks';

export default function PageLayout({ navigationState, navigation }) {
	const { setLocale, locale, t } = useTranslation('PageLayout');
	const { images, colors } = useTheme();
	const { width } = useResponsive();
	return (
		<React.Fragment>
			<View style={[styles.topBar, { backgroundColor: colors.absBlack, width: width }]}>
				<SafeAreaView style={[styles.row, styles.justifyContentSpaceBetween]}>
					{width < 665 && (
						<BottomBarIcons
							isTop
							borderColor="absBlack"
							onPress={() => setLocale(locale === 'es' ? 'en' : 'es')}
							name={t('changeLanguage', true)}
							iconName={'language'}
							iconType="Ionicons"
						/>
					)}
					<View style={[styles.logo, styles.centerObjects]}>
						<Image source={images.logo} style={styles.logoImg} />
					</View>
					<View style={[styles.row]}>
						{width > 665 && (
							<React.Fragment>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 0 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('HomeWebPageScreen')}
									name={t('Start')}
									iconName={'home'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 1 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('ProductsWebPageScreen')}
									name={t('Products')}
									iconName={'tablet'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 2 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('AboutUsWebPageScreen')}
									name={t('About-Us')}
									iconName={'briefcase'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 3 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('ContactWebPageScreen')}
									name={t('Contact')}
									iconName={'mail'}
								/>
							</React.Fragment>
						)}
						<BottomBarIcons
							isTop
							onPress={() => navigation.navigate('LoginScreen')}
							borderColor="absBlack"
							name={t('To-access')}
							iconName={'log-in'}
						/>
						{width > 665 && (
							<BottomBarIcons
								isTop
								borderColor="absBlack"
								name={t('changeLanguage', true)}
								iconName={'language'}
								onPress={() => setLocale(locale === 'es' ? 'en' : 'es')}
								iconType="Ionicons"
							/>
						)}
					</View>
				</SafeAreaView>
			</View>
			{width <= 665 ? (
				<View
					style={[
						{
							backgroundColor: '#000',
							width: width,
						},
						styles.bottonTab,
					]}
				>
					<SafeAreaView style={[styles.row, styles.justifyContentSpaceBetween]}>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('HomeWebPageScreen')}
							borderColor={navigationState.index === 0 ? 'absWhite' : 'absBlack'}
							name={t('Start')}
							iconName={'home'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('ProductsWebPageScreen')}
							borderColor={navigationState.index === 1 ? 'absWhite' : 'absBlack'}
							name={t('Products')}
							iconName={'tablet'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('AboutUsWebPageScreen')}
							borderColor={navigationState.index === 2 ? 'absWhite' : 'absBlack'}
							name={t('About-Us')}
							iconName={'briefcase'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('ContactWebPageScreen')}
							borderColor={navigationState.index === 3 ? 'absWhite' : 'absBlack'}
							name={t('Contact')}
							iconName={'mail'}
						/>
					</SafeAreaView>
				</View>
			) : (
				<View
					style={[
						{
							width: width,
						},
						styles.bottonTab,
					]}
				>
					<SafeAreaView style={[styles.row, styles.centerObjects]}>
						<Pressable onPress={() => navigation.navigate('HomeWebPageScreen')} style={styles.baseMargin}>
							<FontAwesome
								name={navigationState.index === 0 ? 'circle' : 'circle-o'}
								size={25}
								color={colors.absWhite}
							/>
						</Pressable>
						<Pressable
							onPress={() => navigation.navigate('ProductsWebPageScreen')}
							style={styles.baseMargin}
						>
							<FontAwesome
								name={navigationState.index === 1 ? 'circle' : 'circle-o'}
								size={25}
								color={colors.absWhite}
							/>
						</Pressable>
						<Pressable
							onPress={() => navigation.navigate('AboutUsWebPageScreen')}
							style={styles.baseMargin}
						>
							<FontAwesome
								name={navigationState.index === 2 ? 'circle' : 'circle-o'}
								size={25}
								color={colors.absWhite}
							/>
						</Pressable>
						<Pressable
							onPress={() => navigation.navigate('ContactWebPageScreen')}
							style={styles.baseMargin}
						>
							<FontAwesome
								name={navigationState.index === 3 ? 'circle' : 'circle-o'}
								size={25}
								color={colors.absWhite}
							/>
						</Pressable>
					</SafeAreaView>
				</View>
			)}
		</React.Fragment>
	);
}
