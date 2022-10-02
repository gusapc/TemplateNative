import React, { useState } from 'react';
import { View } from 'react-native';
import { WebSection, TextComponent, CardViewMore } from '../../components';
import styles from './AboutUsWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import { useResponsive, useTranslation } from '../../hooks';
import { ModalLaws, ModalPrivacyPolicy, ModalTermsAndConditions } from '../../modules';

export default function AboutUsWebPageScreen() {
	const [modalTosVisible, setModalTosVisible] = useState(false);
	const [modalLawsVisible, setModalLawsVisible] = useState(false);
	const [modalPrivacyPolicyVisible, setModalPrivacyPolicyVisible] = useState(false);
	const handleModalTosVisible = () => setModalTosVisible(!modalTosVisible);
	const handleModalLawsVisible = () => setModalLawsVisible(!modalLawsVisible);
	const handleModalPrivacyPolicyVisible = () => setModalPrivacyPolicyVisible(!modalPrivacyPolicyVisible);
	const { t } = useTranslation('AboutUsWebPageScreen');
	const { images } = useTheme();
	const { breaks, getSize, isDesktop, isMobile, width } = useResponsive();
	return (
		<React.Fragment>
			<ModalLaws
				title={t('termsAndConditions')}
				modalVisible={modalTosVisible}
				handleModal={handleModalTosVisible}
			/>
			<ModalPrivacyPolicy
				title={t('laws')}
				modalVisible={modalLawsVisible}
				handleModal={handleModalLawsVisible}
			/>
			<ModalTermsAndConditions
				title={t('privacyPolicy')}
				modalVisible={modalPrivacyPolicyVisible}
				handleModal={handleModalPrivacyPolicyVisible}
			/>
			<View style={styles.container}>
				<WebSection image={images.aboutuspage}>
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
						<CardViewMore
							onPress={handleModalTosVisible}
							iconType="Octicons"
							iconName="law"
							btnText={t('readMore')}
							description={t('termsAndConditionsDescription')}
							title={t('termsAndConditions')}
						/>
						<CardViewMore
							onPress={handleModalLawsVisible}
							iconType="Octicons"
							iconName="file-badge"
							btnText={t('readMore')}
							description={t('lawsDescription')}
							title={t('laws')}
						/>
						<CardViewMore
							onPress={handleModalPrivacyPolicyVisible}
							iconType="MaterialCommunityIcons"
							iconName="police-badge"
							btnText={t('readMore')}
							description={t('privacyPolicyDescription')}
							title={t('privacyPolicy')}
						/>
						{isMobile && <View style={[getSize(width, 100)]} />}
					</View>
				</WebSection>
			</View>
		</React.Fragment>
	);
}
