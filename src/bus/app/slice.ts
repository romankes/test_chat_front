import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {App} from '.';
import {AppState, AppActionsTypes, types} from './types';

const initialState: AppState = {
  isAccess: false,
  isBottomTab: true,
  isReady: false,
  hasOrderRate: false,
  isClose: false,
  title: '',
};

const slice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    toggleAccess: (state: AppState, action: PayloadAction<boolean>) => {
      state.isAccess = action.payload;
    },
    toggleBottomTab: (state: AppState, action: PayloadAction<boolean>) => {
      state.isBottomTab = action.payload;
    },
    toggleReady: (state: AppState, action: PayloadAction<boolean>) => {
      state.isReady = action.payload;
    },
    toggleHasOrderRate: (state: AppState, action: PayloadAction<boolean>) => {
      state.hasOrderRate = action.payload;
    },
    toggleClose: (
      state: AppState,
      action: PayloadAction<App.ResFetchClose>,
    ) => {
      state.isClose = !!action.payload.is_closed || !!action.payload.is_closed;
      state.title = action.payload.closed_description;
    },
  },
});

export default slice.reducer;

export const appActions = {
  ...slice.actions,
  bootstrapAsync: (): AppActionsTypes => ({
    type: types.BOOTSTRAP,
  }),
  fetchCloseAsync: (): AppActionsTypes => ({
    type: types.FETCH_CLOSE,
  }),
};
