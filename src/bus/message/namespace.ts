import {Asset} from 'react-native-image-picker';
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
    image: string | null;
  };

  export type WaitingItem = Item & {
    status: 'waiting';
  };

  export type ConfirmItemPayload = {
    _id: string;
    message: Item;
  };

  export type Form = {
    text: string;
    image: Asset | null;
  };

  export type ReqCreateItem = Form & {
    roomId: string;
  };
  export type ResCreateItem = {
    message: Message.Item;
  };

  export type Status = 'error' | 'waiting' | 'sended' | 'read';
}
