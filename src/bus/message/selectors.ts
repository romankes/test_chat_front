import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.message.items;
export const getWaitingItems = (state: RootState) => state.message.waitingItems;
