import {Auth} from './namespace';

export enum types {
  FETCH_TOKEN = 'AUTH/FETCH_TOKEN',
  SIGN_IN = 'AUTH/SIGN_IN',
  SIGN_UP = 'AUTH/SIGN_UP',
  LOGOUT = 'AUTH/LOGOUT',
  CLEAR = 'AUTH/CLEAR',

  END_FETCH_TOKEN = 'AUTH/END_FETCH_TOKEN',
  END_CLEAR = ' AUTH/END_CLEAR',
}

//STATE

export type AuthState = {
  token: string | null;
};

//ASYNC

export type SignInAsync = {
  type: typeof types.SIGN_IN;
  payload: Auth.ReqSignIn;
};
export type SignUpAsync = {
  type: typeof types.SIGN_UP;
  payload: Auth.ReqSignUp;
};

export type LogoutAsync = {
  type: typeof types.LOGOUT;
};

export type FetchTokenAsync = {
  type: typeof types.FETCH_TOKEN;
};

export type ClearAsync = {
  type: typeof types.CLEAR;
};

export type AuthActionTypes =
  | FetchTokenAsync
  | ClearAsync
  | SignInAsync
  | SignUpAsync
  | LogoutAsync;
