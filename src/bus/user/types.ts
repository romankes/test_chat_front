import {User} from './namespace';

export enum types {
  FETCH_DETAIL = 'USER/FETCH_DETAIL',

  END_FETCH_DETAIL = 'USER/END_FETCH_DETAIL',
}

//STATE

export type UserState = {
  detail: User.Detail | null;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
};

export type UserActionTypes = FetchDetailAsync;
