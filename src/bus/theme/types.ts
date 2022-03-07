import {ThemesName} from '@/themes';
import {Theme} from './namespace';

export enum types {
  FETCH_THEME = 'THEME/FETCH_THEME',
  CHANGE_THEME = 'THEME/CHANGE_THEME',

  END_CHANGE_THEME = 'THEME/END_CHANGE_THEME',
  END_FETCH_THEME = 'THEME/END_FETCH_THEME',
}

export type ThemeState = {
  theme: Theme.Theme;
};

export type FetchThemeAsync = {
  type: typeof types.FETCH_THEME;
};

export type ChangeThemeAsync = {
  type: typeof types.CHANGE_THEME;
  payload: Theme.Theme;
};

export type ThemeActionTypes = ChangeThemeAsync | FetchThemeAsync;
