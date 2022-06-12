import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.room.items;
export const getDetail = (state: RootState) => state.room.detail;

export const getUsers = (state: RootState) => state.room.users;
