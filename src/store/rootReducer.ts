import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {ThemeState} from '@/bus/theme/types';
import {AuthState} from '@/bus/auth/types';
import {UserState} from '@/bus/user/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {themeReducer} from '@/bus/theme';
import {authReducer} from '@/bus/auth';
import {userReducer} from '@/bus/user';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;
  auth: AuthState;
  user: UserState;
  theme: ThemeState;
};

export default rootReducer;
