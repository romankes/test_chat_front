import {RootState} from '@/store/rootReducer';

export const getWaitingItems = (state: RootState) =>
  state.socket.waitingListenerItems;
export const getBindedItems = (state: RootState) =>
  state.socket.bindedListenerItems;

export const getEventEmitItems = (state: RootState) =>
  state.socket.eventEmitItems;
