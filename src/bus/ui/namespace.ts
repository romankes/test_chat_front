export namespace Ui {
  export type FormName =
    | 'water_list'
    | 'pizza_list'
    | 'sign_in'
    | 'sign_up'
    | 'user'
    | 'order'
    | 'logout'
    | 'ingredient'
    | 'cart'
    | 'rate'
    | 'custom_pizza'
    | 'update_token'
    | 'filter'
    | 'settings'
    | 'configuration';

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
