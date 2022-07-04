import {User} from '../user';

export namespace Message {
  export type Item = {
    _id: string;
    createdAt: string;
    text: string;
    updatedAt: string;
    user: User.Detail;
    room: string;
    status: Status;
  };

  export type WaitingItem = {
    _id: number;
    updatedAt?: string;
    createdAt: string;
    text: string;
    user: null;
    status: 'waiting';
  };

  export type ConfirmItemPayload = {
    _id: number;
    message: Item;
  };

  export type ReqCreateItem = {
    text: string;

    roomId: string;
  };
  export type ResCreateItem = {
    message: Message.Item;
  };

  export type Status = 'error' | 'waiting' | 'sended' | 'read';
}
