import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {ThemeState} from '@/bus/theme/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {themeReducer} from '@/bus/theme';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,

  theme: themeReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;

  theme: ThemeState;
};

export default rootReducer;
