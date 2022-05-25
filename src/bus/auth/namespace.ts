export namespace Auth {
  export type ReqSignIn = {
    email: string;
    password: string;
  };

  export type ResSignIn = {
    token: string;
  };

  export type SignUpForm = {
    email: string;
    password: string;
    confirmPassword: string;
  };

  export type ReqSignUp = Pick<SignUpForm, 'email' | 'password'>;

  export type ResSignUp = {
    token: string;
  };
}
