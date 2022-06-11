import {Asset} from 'react-native-image-picker';

export namespace User {
  export type Item = {
    email: string;
    avatar: string;
    online: boolean;
    username: string;
    _id: string;
  };

  export type Detail = Item;

  export type ResFetchDetail = {
    user: Detail;
  };

  export type ReqFetchItems = {
    username: string;
    page: number;
    per: number;
  };
  export type ResFetchItems = {
    users: Item[];
    totalPage: number;
    currentPage: number;
  };

  export type ReqUpdateDetail = {
    username: string;
    avatar: Asset | null;
  };

  export type ResUpdateDetail = {};
}
