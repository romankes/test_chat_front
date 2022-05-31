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
  };

  export type Detail = Item;

  export type ReqFetchItems = {};
  export type ResFetchItems = {
    rooms: Item[];
  };

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = {
    room: Detail;
    messages: Message.Item[];
  };
}
