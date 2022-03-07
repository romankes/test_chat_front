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
}
