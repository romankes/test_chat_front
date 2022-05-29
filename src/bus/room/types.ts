import {Room} from './namespace';

export enum types {
  FETCH_ITEMS = 'ROOM/FETCH_ITEMS',
  FETCH_DETAIL = 'ROOM/FETCH_DETAIL',
}

export type RoomState = {
  items: Room.Item[];
  detail: Room.Detail | null;
};

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Room.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: Room.ReqFetchDetail;
};

export type RoomActionTypes = FetchItemsAsync | FetchDetailAsync;
