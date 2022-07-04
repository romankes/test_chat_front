import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthState, types, AuthActionTypes} from './types';
import {Auth} from './namespace';

const initialState: AuthState = {
  loggined: false,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    toggleloggined: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loggined = action.payload;
    },
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,

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
};
