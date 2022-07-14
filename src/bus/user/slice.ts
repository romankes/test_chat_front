import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, UserActionTypes, types, UpdateDetailAsync} from './types';
import {User} from './namespace';

const initialState: UserState = {
  items: [],
  detail: null,

  currentPage: 1,
  hasMore: false,
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    saveItems: (
      state: UserState,
      action: PayloadAction<User.ResFetchItems>,
    ) => {
      if (action.payload.currentPage === 1) {
        state.items = action.payload.users;
      } else {
        state.items = [...state.items, ...action.payload.users];
      }

      const totalPage = Math.round(
        action.payload.totalCount / action.payload.per,
      );

      state.currentPage = action.payload.currentPage;
      state.hasMore = action.payload.currentPage < totalPage;
    },
    saveDetail: (state: UserState, action: PayloadAction<User.Detail>) => {
      state.detail = action.payload;
    },

    clearDetail: (state: UserState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

export const userActions = {
  ...slice.actions,
  updateDetailAsync: (payload: User.ReqUpdateDetail): UpdateDetailAsync => ({
    type: types.UPDATE_DETAIL,
    payload,
  }),

  fetchDetailAsync: (): UserActionTypes => ({
    type: types.FETCH_DETAIL,
  }),
  fetchItemsAsync: (payload: User.ReqFetchItems): UserActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
};
