import {Room} from './namespace';

export enum types {
  FETCH_ITEMS = 'ROOM/FETCH_ITEMS',
  FETCH_DETAIL = 'ROOM/FETCH_DETAIL',

  REMOVE_ITEM = 'ROOM/REMOVE_ITEM',
  CREATE_ITEM = 'ROOM/CREATE_ITEM',
}

export type RoomState = {
  items: Room.Item[];
  detail: Room.Detail | null;

  users: Room.User[];
};

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Room.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: Room.ReqFetchDetail;
};

export type CreateItemAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Room.ReqCreateItem;
};

export type RemoveItemAsync = {
  type: typeof types.REMOVE_ITEM;
  payload: Room.ReqRemoveItem;
};

export type RoomActionTypes =
  | FetchItemsAsync
  | FetchDetailAsync
  | CreateItemAsync
  | RemoveItemAsync;
