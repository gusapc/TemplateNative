import React from 'react';
import { Image, View, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useApiSimpleObj } from '../../hooks';
import styles from './ExampleScreenStyle';
import { Metrics } from '../../styles';
import { TextComponent, PrimaryBtn } from '../../components';
import locales from '../../utils/locales';
export default function ExampleScreen(props) {
	const t = (text) => (locales?.i18n?.t ? locales?.i18n?.t(text) : text);

	const { screenWidth } = Metrics;
	const { colors, images } = useTheme();
	const configLoader = useApiSimpleObj('CONFIG');
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<TextComponent size="big" text={t('trinary')} />
			<TextComponent size="big" text={t('currentLanguage')} />
			<Image source={images.logo} resizeMode="stretch" style={{ width: screenWidth }} />
			<PrimaryBtn
				onPress={() => configLoader.setData({ activeDarkTheme: !configLoader?.data?.activeDarkTheme })}
				text={t(!configLoader?.data?.activeDarkTheme ? 'ExampleScreen.darkMode' : 'ExampleScreen.lightMode')}
			/>
			<TextComponent size="huge" text="Montserrat_400Regular" />
			<TextComponent font="mBlack" size="huge" text="Montserrat_900Black" />
			<TextComponent font="fLight" size="huge" text="TFiraSans_300Lightrinary" />
			<PrimaryBtn
				onPress={() =>
					configLoader.setData({ currentLanguage: configLoader.data.currentLanguage === 'en' ? 'es' : 'en' })
				}
				text={t('changeLanguage')}
			/>
		</View>
	);
}
