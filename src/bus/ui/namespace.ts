export namespace Ui {
  export type FormName = 'logout' | 'sign_in' | 'sign_up' | 'room' | 'user';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };

  export type Error = {
    name: FormName;
    message: string;
  };

  export type Success = {
    name: FormName;
    message: string;
  };
}
