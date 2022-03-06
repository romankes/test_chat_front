import {createContext} from 'react';
import {StatusBarStyle} from 'react-native';

//themes
import {Pallete} from './palletes/';
import * as palletes from './palletes/';

export enum ThemesName {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Fonts {
  black = 'OpenSans-ExtraBold',
  bold = 'OpenSans-Bold',
  light = 'OpenSans-Light',
  medium = 'OpenSans-Medium',
  regular = 'OpenSans-Regular',
}

type ThemesItem = {
  pallete: Pallete;
  name: ThemesName;
  statusBarStyle: StatusBarStyle;
  fonts: typeof Fonts;
};

type Themes = {
  light: ThemesItem;
  dark: ThemesItem;
};

export const themes: Themes = {
  light: {
    pallete: palletes[ThemesName.LIGHT],
    name: ThemesName.LIGHT,
    statusBarStyle: 'dark-content',
    fonts: Fonts,
  },
  dark: {
    pallete: palletes[ThemesName.DARK],
    name: ThemesName.DARK,
    statusBarStyle: 'light-content',
    fonts: Fonts,
  },
};

export const ThemeContext = createContext(themes[ThemesName.LIGHT]);
