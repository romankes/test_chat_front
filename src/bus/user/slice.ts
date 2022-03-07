import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, UserActionTypes, types} from './types';
import {User} from './namespace';

const initialState: UserState = {
  detail: null,
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    saveDetail: (state: UserState, action: PayloadAction<User.Detail>) => {
      state.detail = action.payload;
    },
    clearDetail: (state: UserState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

export const userActions = {
  ...slice.actions,
  fetchDetailAsync: (): UserActionTypes => ({
    type: types.FETCH_DETAIL,
  }),
};
