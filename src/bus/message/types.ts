import {Message} from './';

export enum types {
  CREATE_ITEM = 'MESSAGE/CREATE_ITEM',
  PROCESS_ITEM = 'MESSAGE/PROCESS_ITEM',
}

export type MessageState = {
  items: Message.Item[];
  waitingItems: Message.WaitingItem[];
};

export type CreateItemAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Message.ReqCreateItem;
};

export type ProcessItemAsync = {
  type: typeof types.PROCESS_ITEM;
  payload: Message.Item;
};

export type MessageActionTypes = CreateItemAsync | ProcessItemAsync;
