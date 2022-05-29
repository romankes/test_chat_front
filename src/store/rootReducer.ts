import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {ThemeState} from '@/bus/theme/types';
import {AuthState} from '@/bus/auth/types';
import {UserState} from '@/bus/user/types';
import {RoomState} from '@/bus/room/types';
import {MessageState} from '@/bus/message/types';
import {SocketState} from '@/bus/socket/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {themeReducer} from '@/bus/theme';
import {authReducer} from '@/bus/auth';
import {userReducer} from '@/bus/user';
import {roomReducer} from '@/bus/room';
import {messageReducer} from '@/bus/message';
import {socketReducer} from '@/bus/socket';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
  room: roomReducer,
  message: messageReducer,
  socket: socketReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;
  auth: AuthState;
  user: UserState;
  theme: ThemeState;
  room: RoomState;
  message: MessageState;
  socket: SocketState;
};

export default rootReducer;
