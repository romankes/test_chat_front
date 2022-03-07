export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',
}

export type AppState = {
  isBottomTab: boolean;
  initialized: boolean;
};

//ASYNC

export type BootstrapAsync = {
  type: typeof types.BOOTSTRAP;
};

export type AppActionsTypes = BootstrapAsync;
