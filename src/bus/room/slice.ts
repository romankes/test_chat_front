import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {types, RoomState, RoomActionTypes} from './types';
import {Room} from './';
import {Message} from '../message';

const initialState: RoomState = {
  items: [],
  detail: null,

  page: 1,
  totalCount: 0,

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
      if (action.payload.page === 1) {
        state.items = action.payload.rooms;
      } else {
        state.items = [...state.items, ...action.payload.rooms];
      }

      state.page = action.payload.page;
      state.totalCount = action.payload.totalCount;
    },

    saveDetail: (state: RoomState, action: PayloadAction<Room.Detail>) => {
      const index = state.items.findIndex(
        ({_id}) => _id === action.payload._id,
      );

      if (index !== -1) {
        state.items[0].notReadCount = 0;
      }

      state.detail = action.payload;
    },
    clearDeatil: (state: RoomState) => {
      state.detail = null;
    },

    saveUsers: (state: RoomState, action: PayloadAction<Room.User[]>) => {
      state.users = action.payload;
    },
    removeUser: (state: RoomState, action: PayloadAction<string>) => {
      state.users = state.users.filter(({_id}) => _id !== action.payload);
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

    updateLastMessage: (
      state: RoomState,
      action: PayloadAction<Message.Item>,
    ) => {
      const index = state.items.findIndex(
        ({_id}) => _id === action.payload.room,
      );

      if (index !== -1) {
        const room = {
          ...state.items[index],
          message: action.payload,
        };

        state.items = [room, ...state.items.filter((_, i) => i !== index)];
      }
    },
    updateNotReadCount: (
      state: RoomState,
      action: PayloadAction<Room.UpdateNotReadCountPayload>,
    ) => {
      const index = state.items.findIndex(({_id}) => _id === action.payload.id);

      if (index !== -1) {
        state.items[index].notReadCount = state.items[index].notReadCount + 1;
      }
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
