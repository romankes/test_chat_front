export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',
  FETCH_CLOSE = 'APP/FETCH_CLOSE',
}

export type AppState = {
  isAccess: boolean;
  isBottomTab: boolean;
  isReady: boolean;
  hasOrderRate: boolean;
  isClose: boolean;
  title: string;
};

//ASYNC

export type BootstrapAsync = {
  type: typeof types.BOOTSTRAP;
};

export type FetchCloseAsync = {
  type: typeof types.FETCH_CLOSE;
};

export type AppActionsTypes = BootstrapAsync | FetchCloseAsync;
