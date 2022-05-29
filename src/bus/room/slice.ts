import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {types, RoomState, RoomActionTypes} from './types';
import {Room} from './';

const initialState: RoomState = {
  items: [],
  detail: null,
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
};
