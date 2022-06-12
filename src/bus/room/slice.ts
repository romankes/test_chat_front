import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {types, RoomState, RoomActionTypes} from './types';
import {Room} from './';

const initialState: RoomState = {
  items: [],
  detail: null,

  users: [],
};

const slice = createSlice({
  name: 'Room',
  initialState,
  reducers: {
    saveItems: (
      state: RoomState,
      action: PayloadAction<Room.ResFetchItems>,
    ) => {
      state.items = action.payload.rooms;
    },

    saveDetail: (state: RoomState, action: PayloadAction<Room.Detail>) => {
      state.detail = action.payload;
    },
    clearDeatil: (state: RoomState) => {
      state.detail = null;
    },

    saveUsers: (state: RoomState, action: PayloadAction<Room.User[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state: RoomState) => {
      state.users = [];
    },

    removeItem: (
      state: RoomState,
      action: PayloadAction<Room.ResRemoveItem>,
    ) => {
      state.items = state.items.filter(({_id}) => _id !== action.payload.room);
    },
    createItem: (
      state: RoomState,
      action: PayloadAction<Room.ResCreateItem>,
    ) => {
      state.items = [action.payload.room, ...state.items];
    },
  },
});

export default slice.reducer;

export const roomActions = {
  ...slice.actions,
  fetchItemsAsync: (payload: Room.ReqFetchItems): RoomActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Room.ReqFetchDetail): RoomActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),

  createItemAsync: (payload: Room.ReqCreateItem): RoomActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  removeItemAsync: (payload: Room.ReqRemoveItem): RoomActionTypes => ({
    type: types.REMOVE_ITEM,
    payload,
  }),
};
