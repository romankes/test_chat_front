import {Asset} from 'react-native-image-picker';

export namespace User {
  export type Item = {
    email: string;
    avatar: string;
    online: boolean;
    name: string;
    _id: string;
  };

  export type Detail = Item;

  export type ResFetchDetail = {
    user: Detail;
  };

  export type ReqFetchItems = {
    name: string;
    page: number;
    per: number;
  };
  export type ResFetchItems = {
    users: Item[];
    totalCount: number;
    currentPage: number;
    per: number;
  };

  export type ReqUpdateDetail = {
    name?: string;
    avatar?: Asset | null;
    deviceToken?: string;
    currentRoom?: string;
  };

  export type ResUpdateDetail = {};
}
