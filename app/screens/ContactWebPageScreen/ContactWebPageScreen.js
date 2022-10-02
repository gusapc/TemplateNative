import React, { useState } from 'react';
import { View } from 'react-native';
import { WebSection, TextComponent } from '../../components';
import styles from './ContactWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import { useResponsive, useTranslation } from '../../hooks';

export default function ContactWebPageScreen() { 
	const { t } = useTranslation('ContactWebPageScreen');
	const { images } = useTheme();
	const { breaks, getSize, isDesktop, isMobile } = useResponsive();
	return (
		<React.Fragment>
			 
			<View style={styles.container}>
				<WebSection image={images.contactpage}>
					<View
						style={[
							styles.fullWidth,
							styles.flex,
							styles.row,
							styles.wrap,
							styles.justifyContentSpaceAround,
							styles.alignContentSpaceAround,
							breaks[20] && styles.justifyContentCenter,
						]}
					>
						<View style={[styles.fullWidth, styles.baseVerticalMargin]}>
							{!isDesktop && isMobile && <View style={getSize(10, 48)} />}
							<TextComponent 
								align="center"
								color={'absWhite'}
								font="mExtraBold"
								size={'huge'}
								text={t('title')}
							/>
						</View>
						<View style={[styles.fullWidth, styles.baseVerticalMargin]}>
							<TextComponent
								styles={[styles.baseTopMargin, styles.doubleHorizontalMargin]}
								color={'absWhite'}
								font="mSemiBold"
								size={isDesktop ? 'big' : 'body'}
								align="center"
								text={t('text')}
							/>
						</View>
						 
					</View>
				</WebSection>
			</View>
		</React.Fragment>
	);
}
