import React, { useState } from 'react';
import { View, Image, Pressable, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { WebSection, TextComponent } from '../../components';
import { PageBottomBar, PageTopBar } from '../../modules';
import styles from './PageScreenStyle';
import { Metrics } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function PageScreen({ navigation }) {
	const { images, colors } = useTheme();
	const [currentPage, setCurrentPage] = useState('');
	const { width, height } = useWindowDimensions();
	const HomeDes = () => (
		<ScrollView style={{ width, height: height }}>
			<View style={[{ width, height: height * 0.85 }, styles.row]}>
				<View style={[{ width: width * 0.5, minWidth: 330 }, styles.fullHeigth, styles.centerObjects]}>
					<ImageBackground
						source={width > 768 ? images.group1 : images.Mockup19}
						resizeMode="contain"
						style={[
							{
								minWidth: width * 0.5,
								minHeight: '80%',
								marginTop: '10%',
							},
						]}
					/>
				</View>
				<View style={[{ width: width * 0.5 }, styles.section1]}>
					<View style={[styles.viosnameContent]}>
						<ImageBackground resizeMode="contain" source={images.viosname} style={styles.viosname} />
					</View>
					<View style={[styles.section2, styles.centerObjects]}>
						<TextComponent
							color={'absWhite'}
							font="mExtraBold"
							size={width < 920 ? 'huge' : 'xHuge'}
							text="Creando comunidades unidas y vecindarios inteligentes."
						/>
					</View>
					<View style={[styles.section2]}>
						<Pressable>
							<ImageBackground resizeMode="contain" source={images.playstore} style={[styles.store]} />
						</Pressable>
						<Pressable>
							<ImageBackground resizeMode="contain" source={images.appstore} style={[styles.store]} />
						</Pressable>
					</View>
				</View>
			</View>
			<View style={[{ width, height: height * 0.15 }, styles.centerObjects]}>
				<Pressable
					onPress={() => setCurrentPage('product')}
					style={[styles.baseVerticalMargin, styles.centerObjects]}
				>
					<TextComponent font="mSemiBold" text="Productos" color={'absWhite'} />
					<Feather name="chevron-down" size={80} color={colors['absWhite']} />
				</Pressable>
			</View>
		</ScrollView>
	);
	return (
		<View style={styles.container}>
			<PageTopBar
				currentPage={currentPage}
				onPress={(page) => setCurrentPage(page)}
				onAccess={() => navigation.navigate('LoginScreen')}
			/>
			{currentPage === '' && (
				<WebSection image={images.homepage}>
					{width >= 665 && (height > width || height < 850) ? (
						<HomeDes />
					) : (
						<ScrollView style={{ width, height: height }}>
							<View style={{ width, height: Metrics.navBarHeight }} />
							<View style={[{ minHeight: 150, width, height: height * 0.15 }, styles.centerObjects]}>
								<ImageBackground
									resizeMode="contain"
									source={images.viosname}
									style={[{ minWidth: 150, height: '100%' }, styles.centerObjects]}
								/>
							</View>
							<View
								style={[
									{ minHeight: 150, maxWidth: width, height: height * 0.15 },
									styles.centerObjects,
									styles.baseHorizontalPadding,
								]}
							>
								<TextComponent
									color={'absWhite'}
									size={width < 420 ? 'big' : 'huge'}
									align="center"
									font="mExtraBold"
									text="Creando comunidades unidas y vecindarios inteligentes."
								/>
							</View>
							<View
								style={[
									{ minHeight: 150, maxWidth: width, height: height * 0.3 },
									styles.centerObjects,
									styles.baseHorizontalPadding,
									width > height && styles.row,
								]}
							>
								<Pressable>
									<ImageBackground
										resizeMode="contain"
										source={images.playstore}
										style={[styles.store]}
									/>
								</Pressable>
								{width > height && <View style={{ width: '20%', height: 10 }} />}
								<Pressable>
									<ImageBackground
										resizeMode="contain"
										source={images.appstore}
										style={[styles.store]}
									/>
								</Pressable>
							</View>
							<View
								style={[
									{ minHeight: 150, maxWidth: width, height: height * 0.3 },
									styles.centerObjects,
									{ alignContent: 'flex-end' },
								]}
							>
								<ImageBackground
									source={images.headerMessages}
									resizeMode="contain"
									style={{
										minWidth: width * 0.5,
										height: '100%',
									}}
								/>
							</View>
						</ScrollView>
					)}
				</WebSection>
			)}
			{currentPage === 'product' && (
				<WebSection image={images.productspage}>
					<Image source={images.viosname} style={{ width: 100, height: 100 }} />
				</WebSection>
			)}
			{currentPage === 'aboutus' && <WebSection image={images.aboutuspage}></WebSection>}
			{currentPage === 'contact' && <WebSection image={images.contactpage}></WebSection>}
			{width <= 665 && (
				<PageBottomBar
					currentPage={currentPage}
					onPress={(page) => setCurrentPage(page)}
					onAccess={() => navigation.navigate('LoginScreen')}
				/>
			)}
		</View>
	);
}

// {/* <Image source={images.group1} style={{ width: 100, height: 100 }} />
// 					<Image source={images.viosname} style={{ width: 100, height: 100 }} />
// 					<TextComponent text='Creando comunidades unidas y vecindarios inteligentes.' />
// 					<Image source={images.playstore} style={{ width: 100, height: 100 }} />
// 					<Image source={images.appstore} style={{ width: 100, height: 100 }} /> */}
