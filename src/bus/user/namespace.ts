import {Asset} from 'react-native-image-picker';

export namespace User {
  export type Detail = {
    email: string;
    avatar: string;
    online: boolean;
    _id: string;
  };

  export type ResFetchDetail = {
    user: Detail;
  };

  export type ReqUpdateDetail = {
    username: string;
    avatar: Asset | null;
  };

  export type ResUpdateDetail = {};
}
