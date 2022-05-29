import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Socket} from './namespace';
import {SocketState} from './types';

const initialState: SocketState = {
  eventEmitItems: [],

  bindedListenerItems: [],
  waitingListenerItems: [],
};

const slice = createSlice({
  name: 'Socket',
  initialState,
  reducers: {
    toggleBindedItemListener: (
      state: SocketState,
      action: PayloadAction<Socket.ListenerItem>,
    ) => {
      const index = state.bindedListenerItems.findIndex(
        (item) => item.event === action.payload.event,
      );

      if (index === -1) {
        state.bindedListenerItems = [
          ...state.bindedListenerItems,
          action.payload,
        ];
      } else {
        state.bindedListenerItems = state.bindedListenerItems.filter(
          (item) => item.event !== action.payload.event,
        );
      }
    },
    clearBindedItems: (state: SocketState) => {
      state.bindedListenerItems = [];
    },

    createWaitingItemListener: (
      state: SocketState,
      action: PayloadAction<Socket.NewListenerItem>,
    ) => {
      const index = state.waitingListenerItems.findIndex(
        (item) => item.event === action.payload.event,
      );

      if (index === -1) {
        state.waitingListenerItems = [
          ...state.waitingListenerItems,
          action.payload,
        ];
      }
    },
    clearWaitingItems: (state: SocketState) => {
      state.waitingListenerItems = [];
    },

    createEventEmitItem: (
      state: SocketState,
      action: PayloadAction<Socket.EventEmitItem>,
    ) => {
      const index = state.eventEmitItems.findIndex(
        (item) => item.event === action.payload.event,
      );

      if (index === -1) {
        state.eventEmitItems = [...state.eventEmitItems, action.payload];
      }
    },
    clearEventEmitItems: (state: SocketState) => {
      state.eventEmitItems = [];
    },
  },
});

export default slice.reducer;

export const socketActions = {
  ...slice.actions,
};
