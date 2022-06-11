import {User} from './namespace';

export enum types {
  FETCH_ITEMS = 'USER/FETCH_ITEMS',
  FETCH_DETAIL = 'USER/FETCH_DETAIL',
  UPDATE_DETAIL = 'USER/UPDATE_DETAIL',

  END_FETCH_DETAIL = 'USER/END_FETCH_DETAIL',
}

//STATE

export type UserState = {
  items: User.Item[];
  detail: User.Detail | null;

  currentPage: number;
  hasMore: boolean;
};

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: User.ReqFetchItems;
};
export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
};
export type UpdateDetailAsync = {
  type: types.UPDATE_DETAIL;
  payload: User.ReqUpdateDetail;
};
export type UserActionTypes =
  | FetchDetailAsync
  | UpdateDetailAsync
  | FetchItemsAsync;
