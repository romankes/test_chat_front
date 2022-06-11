import {RootState} from '@/store/rootReducer';

export const getDetail = (state: RootState) => state.user.detail;
export const getItems = (state: RootState) => state.user.items;

export const getHasMore = (state: RootState) => state.user.hasMore;
export const getCurrentPage = (state: RootState) => state.user.currentPage;
