import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import logoLight from './Trinary1.png'
import logoDark from './TrinaryDarkMode2.png'
import colors from '../app/styles/Colors';
export const defaultColors = {
  white: '#FFFFFF',
  black: '#000',
  main: '#E53130',
	darker: '#9CADC6',

};

export const assetsLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultColors.white, 
    main: defaultColors.main, 
    darker: defaultColors.darker, 
    ...colors
  },
  images: {
    logo: logoLight
  },
};

export const assetsDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: defaultColors.black, 
    main: defaultColors.main, 
    darker: defaultColors.darker, 
    ...colors
  },

  images: {
    logo: logoDark
  },
};
