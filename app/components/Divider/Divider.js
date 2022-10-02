import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './DividerStyle';
import { useTheme } from '@react-navigation/native';

const Divider = ({ addVerticalMargin, addHorizontalMargin, color }) => {
	const { colors, getBg } = useTheme();
	return (
		<View
			style={[
				styles.divider,
				addVerticalMargin && styles.smallVerticalMargin,
				addHorizontalMargin && styles.baseHorizontalMargin,
				getBg(colors[color]),
			]}
		/>
	);
};

export default React.memo(Divider);

Divider.propTypes = {
	addVerticalMargin: PropTypes.bool,
	addHorizontalMargin: PropTypes.bool,
	color: PropTypes.string,
};

Divider.defaultProps = {
	addVerticalMargin: false,
	addHorizontalMargin: false,
	color: 'absWhite',
};
