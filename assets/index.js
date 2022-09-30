import { DefaultTheme, DarkTheme } from '@react-navigation/native'; 
import aboutuspage from './aboutuspage.png';
import appstore from './appstore.png';
import bg3 from './bg3.jpeg';
import contactpage from './contactpage.png';
import facebook from './facebook.png';
import group1 from './group1.png';
import headerMessages from './headerMessages.png';
import homepage from './homepage.jpeg';
import laws from './laws.png';
import logo from './logo.png';
import mision from './mision.png';
import playstore from './playstore.png';
import productspage from './productspage.png';
import readMore from './readMore.png';
import team from './team.png';
import tos from './tos.png';
import viosIcon from './vios-icon.png';
import viosname from './viosname.png';
import vision from './vision.png';
import Mockup19 from './mockup_19.png';
import screen5 from './screen5.png';

import defaultColors from './colors';

export const imgs = {
	aboutuspage,
	appstore,
	bg3,
	contactpage,
	facebook,
	group1,
	headerMessages,
	homepage,
	laws,
	logo,
	mision,
	playstore,
	productspage,
	readMore,
	team,
	tos,
	viosIcon,
	viosname,
	vision,
	Mockup19,
	screen5
};

export const assetsLight = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		...defaultColors,
		background: defaultColors.white,
		main: defaultColors.main,
		darker: defaultColors.darker,
	},
	images: {
		...imgs,
	},
};

export const assetsDark = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		...defaultColors,
		background: defaultColors.black,
		main: defaultColors.main,
		darker: defaultColors.darker,
	},

	images: {
		...imgs,
	},
};
