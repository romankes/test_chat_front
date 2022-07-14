import {Asset} from 'react-native-image-picker';
import {Message} from '../message';
import {User} from '../user';

export namespace Room {
  export type Item = {
    _id: string;
    admin: string;
    createdAt: string;
    title: string;
    updatedAt: string;
    users: User.Detail[];

    message: Message.Item | null;
    notReadCount: number;

    avatar: string | null;
  };

  export type User = User.Item;

  export type Detail = Item & {
    messages: Message.Item[];
  };

  export type ReqFetchItems = {
    title: string;
    page: number;
    per: number;
  };
  export type ResFetchItems = {
    rooms: Item[];
    totalCount: number;
    page: number;
  };

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = {
    room: Detail;
  };

  export type ReqCreateItem = {
    title: string;
    users: string[];
    avatar: Asset | null;
  };
  export type ResCreateItem = {
    room: Room.Item;
  };

  export type ReqRemoveItem = {
    id: string;
  };
  export type ResRemoveItem = {room: string};

  export type UpdateNotReadCountPayload = {
    id: string;
  };
}
