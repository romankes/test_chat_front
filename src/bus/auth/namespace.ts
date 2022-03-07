export namespace Auth {
  export type ReqSignIn = {
    email: string;
    passwod: string;
  };

  export type ResSignIn = {
    token: string;
  };

  export type ReqSignUp = {
    email: string;
    password: string;
  };

  export type ResSignUp = {
    token: string;
  };
}