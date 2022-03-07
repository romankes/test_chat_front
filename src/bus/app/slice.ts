import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {App} from '.';
import {AppState, AppActionsTypes, types} from './types';

const initialState: AppState = {
  isBottomTab: true,
  initialized: false,
};

const slice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    toggleBottomTab: (state: AppState, action: PayloadAction<boolean>) => {
      state.isBottomTab = action.payload;
    },
    toggleInitialized: (state: AppState, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export default slice.reducer;

export const appActions = {
  ...slice.actions,
  bootstrapAsync: (): AppActionsTypes => ({
    type: types.BOOTSTRAP,
  }),
};
