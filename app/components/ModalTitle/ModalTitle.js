import React from 'react';
import { View, Modal, SafeAreaView, ScrollView } from 'react-native';
import Divider from '../Divider';
import TextComponent from '../TextComponent';
import { useTheme } from '@react-navigation/native';
import { useResponsive } from '../../hooks';
import { Feather } from '@expo/vector-icons';
import styles from './ModalTitleStyle';
import PropTypes from 'prop-types';

const ModalTitle = ({ modalVisible, handleModal, children, title, titleColor, bg, fullBg, brColor, bgOpacity }) => {
	const { colors, getBg, getBrColor } = useTheme();
	const { getSize, breaks } = useResponsive();
	return (
		<Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={handleModal}>
			<View style={[getSize('100%', '100%'), getBg(colors[bgOpacity]), styles.imageFill, styles.op]} />
			<View style={[getSize('100%', '100%'), getBg(colors[fullBg]), styles.centerObjects]}>
				<SafeAreaView
					style={[
						getSize(breaks[21], breaks[21]),
						breaks[22] && styles.anticolumn,
						getBg(colors[bg]),
						!breaks[22] && styles.br,
						getBrColor(colors[brColor]),
					]}
				>
					<View style={[getSize('100%'), styles.alignItemsFlexEnd, breaks[22] && styles.centerObjects]}>
						<Feather
							style={[styles.baseHorizontalMargin, breaks[22] ? styles.baseBottomMargin: styles.baseTopMargin]}
							onPress={handleModal}
							name={'x'}
							size={35}
							color={colors[titleColor]}
						/>
					</View>
					<TextComponent
						styles={breaks[22] ? styles.baseBottomMargin : {}}
						align="center"
						color={titleColor}
						font="mExtraBold"
						size={'big'}
						text={title}
					/>
					<View style={getSize(16, 16)} />
					<Divider />
					<ScrollView style={getSize('100%', '100%')}>
						<View style={getSize('100%', breaks[17])} />
						<View style={styles.baseMargin}>{children}</View>
						<View style={getSize('100%', breaks[17])} />
					</ScrollView>
				</SafeAreaView>
			</View>
		</Modal>
	);
};

export default React.memo(ModalTitle);

ModalTitle.propTypes = {
	modalVisible: PropTypes.bool,
	handleModal: PropTypes.func,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	bg: PropTypes.string,
	fullBg: PropTypes.string,
	brColor: PropTypes.string,
	bgOpacity: PropTypes.string,
};

ModalTitle.defaultProps = {
	modalVisible: false,
	handleModal: () => {},
	title: '',
	titleColor: 'absWhite',
	brColor: 'absWhite',
	bg: 'absBlack',
	fullBg: 'transparent',
	bgOpacity: 'absBlack',
};
