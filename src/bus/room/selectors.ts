import {RootState} from '@/store/rootReducer';
import {createSelector} from '@reduxjs/toolkit';

export const getItems = (state: RootState) => state.room.items;
export const getDetail = (state: RootState) => state.room.detail;

export const getUsers = (state: RootState) => state.room.users;

export const getPage = (state: RootState) => state.room.page;
export const getTotalCount = (state: RootState) => state.room.totalCount;

export const getHasMore = createSelector(
  [getTotalCount, getItems],
  (total, items) => total > items.length,
);
