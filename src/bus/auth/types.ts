import {Auth} from './namespace';

export enum types {
  SIGN_IN = 'AUTH/SIGN_IN',
  SIGN_UP = 'AUTH/SIGN_UP',
  LOGOUT = 'AUTH/LOGOUT',
}

//STATE

export type AuthState = {
  loggined: boolean;
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

export type AuthActionTypes = SignInAsync | SignUpAsync | LogoutAsync;
