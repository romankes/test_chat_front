import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MessageActionTypes, MessageState, types} from './types';
import {Message} from './';

const initialState: MessageState = {
  items: [],

  waitingItems: [],
};

export const slice = createSlice({
  name: 'Message',
  initialState,
  reducers: {
    saveItems: (state: MessageState, action: PayloadAction<Message.Item[]>) => {
      state.items = action.payload;
    },
    createWaitingItem: (
      state: MessageState,
      action: PayloadAction<Message.WaitingItem>,
    ) => {
      state.waitingItems.push(action.payload);
    },
    confirmItem: (
      state: MessageState,
      action: PayloadAction<Message.ConfirmItemPayload>,
    ) => {
      state.waitingItems = state.waitingItems.filter(
        (item) => item._id !== action.payload._id,
      );

      state.items.push(action.payload.message);
    },
    clearItems: (state: MessageState) => {
      state.items = [];
    },
  },
});

export default slice.reducer;

export const messageActions = {
  ...slice.actions,
  createItemAsync: (payload: Message.ReqCreateItem): MessageActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  processItemAsync: (payload: Message.Item): MessageActionTypes => ({
    type: types.PROCESS_ITEM,
    payload,
  }),
};
