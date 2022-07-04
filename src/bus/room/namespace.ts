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
  };

  export type User = User.Item;

  export type Detail = Item & {
    messages: Message.Item[];
  };

  export type ReqFetchItems = {};
  export type ResFetchItems = {
    rooms: Item[];
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
  };
  export type ResCreateItem = {
    room: Room.Item;
  };

  export type ReqRemoveItem = {
    id: string;
  };
  export type ResRemoveItem = {room: string};
}
