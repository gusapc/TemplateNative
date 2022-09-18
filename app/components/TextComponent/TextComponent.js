import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts } from '../../styles';
import { useTheme } from '@react-navigation/native';

const TextComponent = (props) => {
	const { colors } = useTheme();
	const textColor = { color: colors[props.color] };
	const align = { textAlign: props.align };
	const size = { fontSize: Fonts.size[props.size] };
	const weight = { fontFamily: Fonts.fonts[props.font ?? 'mRegular'] };
	return (
		<Text {...props} allowFontScaling={false} style={[size, textColor, align, weight, props.styles]}>
			{props.text}
		</Text>
	);
};

export default React.memo(TextComponent);

TextComponent.propTypes = {
	text: PropTypes.node,
	color: PropTypes.string,
	weight: PropTypes.string,
	font: PropTypes.string,
	align: PropTypes.string,
	size: PropTypes.string,
	styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextComponent.defaultProps = {
	text: '',
	font: 'mRegular',
	color: 'main',
	weight: 'regular',
	align: 'left',
	size: 'large',
	styles: {},
};
