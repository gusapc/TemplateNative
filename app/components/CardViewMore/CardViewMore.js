import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CardViewMoreStyle';
import { useResponsive } from '../../hooks';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import TextComponent from '../TextComponent';
import PrimaryBtn from '../PrimaryBtn';

const CardViewMore = ({ iconType, iconName, iconSize, color, description, onPress, btnText }) => {
	const { colors } = useTheme();
	const { getSize, isMobile } = useResponsive();
	return (
		<View
			style={[getSize(340, 340), styles.baseMargin, styles.justifyContentSpaceBetween, styles.alignItemsCenter, isMobile && styles.baseVerticalPadding]}
		>
			{iconType === 'Octicons' && <Octicons name={iconName} size={iconSize} color={colors[color]} />}
			{iconType === 'MaterialCommunityIcons' && (
				<MaterialCommunityIcons name={iconName} size={iconSize} color={colors[color]} />
			)}
			<TextComponent color={'absWhite'} font="mSemiBold" size={'subtitle'} align="center" text={description} />
			<PrimaryBtn
				onPress={onPress}
				bgColor="transparent"
				text={btnText}
				colorText="absWhite"
				borderColor="absWhite"
			/>
		</View>
	);
};

export default React.memo(CardViewMore);

CardViewMore.propTypes = {
	btnText: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
	iconType: PropTypes.string,
	iconName: PropTypes.string,
	colo: PropTypes.string,
	iconSize: PropTypes.number,
	onPress: PropTypes.func,
};

CardViewMore.defaultProps = {
	btnText: '',
	description: '',
	title: '',
	iconType: 'Octicons',
	iconName: 'home',
	iconSize: 150,
	color: 'absWhite',
	onPress: () => {},
};
