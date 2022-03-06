import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ThemesName} from '@/themes';
import {Theme} from './namespace';
import {ThemeActionTypes, ThemeState, types} from './types';

const initialState: ThemeState = {
  theme: ThemesName.DARK,
};

const slice = createSlice({
  initialState,
  name: 'Theme',
  reducers: {
    changeTheme: (state: ThemeState, action: PayloadAction<Theme.Theme>) => {
      state.theme = action.payload;
    },
  },
});

export default slice.reducer;

export const themeActions = {
  ...slice.actions,
  fetchThemeAsync: (): ThemeActionTypes => ({
    type: types.FETCH_THEME,
  }),
  changeThemeAsync: (payload: Theme.Theme): ThemeActionTypes => ({
    type: types.CHANGE_THEME,
    payload,
  }),
};
