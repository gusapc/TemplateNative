import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import styles from './PageLayoutStyle';
import { BottomBarIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { useTranslation } from '../../hooks';


export default function PageLayout({ navigationState, navigation }) {
	const { setLocale, locale } = useTranslation();
	const { images, colors } = useTheme();
	const { width } = useWindowDimensions();
	return (
		<React.Fragment>
			<View style={[styles.topBar, { backgroundColor: colors.absBlack, width: width }]}>
				<SafeAreaView style={[styles.row, styles.justifyContentSpaceBetween]}>
					{width < 665 && (
						<BottomBarIcons
							isTop
							borderColor="absBlack"
							onPress={() => setLocale(locale === 'es' ? 'en' : 'es')}
							name={'changeLanguage'}
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
									name={'PageLayout.Start'}
									iconName={'home'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 1 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('ProductsWebPageScreen')}
									name={'PageLayout.Products'}
									iconName={'tablet'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 2 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('AboutUsWebPageScreen')}
									name={'PageLayout.About-Us'}
									iconName={'briefcase'}
								/>
								<BottomBarIcons
									isTop
									borderColor={navigationState.index === 3 ? 'absWhite' : 'absBlack'}
									onPress={() => navigation.navigate('ContactWebPageScreen')}
									name={'PageLayout.Contact'}
									iconName={'mail'}
								/>
							</React.Fragment>
						)}
						<BottomBarIcons
							isTop
							onPress={() => navigation.navigate('LoginScreen')}
							borderColor="absBlack"
							name={'PageLayout.To-access'}
							iconName={'log-in'}
						/>
						{width > 665 && (
							<BottomBarIcons
								isTop
								borderColor="absBlack"
								name={'changeLanguage'}
								iconName={'language'}
								onPress={() => setLocale(locale === 'es' ? 'en' : 'es')}
								iconType="Ionicons"
							/>
						)}
					</View>
				</SafeAreaView>
			</View>
			{width < 665 && (
				<View
					style={[{
						backgroundColor: '#000',
						width: width,
						
					}, styles.bottonTab]}
				>
					<SafeAreaView style={[styles.row, styles.justifyContentSpaceBetween]}>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('HomeWebPageScreen')}
							borderColor={navigationState.index === 0 ? 'absWhite' : 'absBlack'}
							name={'PageLayout.Start'}
							iconName={'home'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('ProductsWebPageScreen')}
							borderColor={navigationState.index === 1 ? 'absWhite' : 'absBlack'}
							name={'PageLayout.Products'}
							iconName={'tablet'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('AboutUsWebPageScreen')}
							borderColor={navigationState.index === 2 ? 'absWhite' : 'absBlack'}
							name={'PageLayout.About-Us'}
							iconName={'briefcase'}
						/>
						<BottomBarIcons
							isBottom
							onPress={() => navigation.navigate('ContactWebPageScreen')}
							borderColor={navigationState.index === 3 ? 'absWhite' : 'absBlack'}
							name={'PageLayout.Contact'}
							iconName={'mail'}
						/>
					</SafeAreaView>
				</View>
			)}
		</React.Fragment>
	);
}
