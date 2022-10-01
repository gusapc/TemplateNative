import React from 'react';
import { View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { Feather, Ionicons } from '@expo/vector-icons';
import TextComponent from '../TextComponent';
import styles from './BottomBarIconsStyle';
import { useTheme } from '@react-navigation/native';
import {  useResponsive } from '../../hooks';

export default function BottomBarIcons(props) {
	const { width, getSize } = useResponsive();
	const { colors } = useTheme();
	const icon = () => {
		if (props.iconType === 'Ionicons')
			return <Ionicons name={props.iconName} size={props.size} color={colors['absWhite']} style={{ top: 2 }} />;
		return <Feather name={props.iconName} size={props.size} color={colors['absWhite']} />;
	};
	return (
		<Pressable onPress={props.onPress}>
			{({ hovered }) => (
				<View
					style={[
						styles.flex,
						styles.space,
						{ width: width / 3 },
						styles.alignItemsCenter,
						styles.justifyContentFlexEnd,
						props.isBottom ? styles.topBorder : styles.topBorderActive,
						props.isTop ? styles.bottomBorder : styles.bottomBorderActive,
						{ borderColor: colors[!hovered ? props.borderColor : props.borderHoverColor] },
						hovered && { opacity: 0.8 },
					]}
				>
					{icon()}
					<View style={{ marginBottom: 10 }}>
						<TextComponent
							size={'label'}
							text={props.name}
							color={props.textColor}
							numberOfLines={1}
							ellipsizeMode={'tail'}
						/>
					</View>
				</View>
			)}
		</Pressable>
	);
}

BottomBarIcons.propTypes = {
	onPress: PropTypes.func,
	iconType: PropTypes.string,
	borderColor: PropTypes.string,
	textColor: PropTypes.string,
	borderHoverColor: PropTypes.string,
	name: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	size: PropTypes.number,
	isTop: PropTypes.bool,
	isBottom: PropTypes.bool,
};

BottomBarIcons.defaultProps = {
	onPress: () => {},
	iconType: 'Feather',
	textColor: 'absWhite',
	size: 30,
	isTop: false,
	isBottom: false,
	borderColor: 'absWhite',
	borderHoverColor: 'absWhite',
};
