import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthState, types, AuthActionTypes} from './types';
import {Auth} from './namespace';

const initialState: AuthState = {
  token: null,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    saveToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,
  fetchTokenAsync: (): AuthActionTypes => ({
    type: types.FETCH_TOKEN,
  }),
  signInAsync: (payload: Auth.ReqSignIn): AuthActionTypes => ({
    type: types.SIGN_IN,
    payload,
  }),
  signUpAsync: (payload: Auth.ReqSignUp): AuthActionTypes => ({
    type: types.SIGN_UP,
    payload,
  }),
  logoutAsync: (): AuthActionTypes => ({
    type: types.LOGOUT,
  }),
  updateTokenAsync: (payload: string): AuthActionTypes => ({
    type: types.UPDATE_TOKEN,
    payload,
  }),
};
