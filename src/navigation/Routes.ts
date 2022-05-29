import {TouchableOpacity} from 'react-native';
export enum Routes {
  //App
  AUTH = 'AUTH',
  TABS = 'TABS',

  //TABS
  USER = 'USER',
  ROOM = 'ROOM',
  ROOM_CREATE = 'ROOM_CREATE',

  //AUTH_NAVIGATOR
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  FINISH_SIGN_UP = 'FINISH_SIGN_UP',

  //PROFILE
  USER_DETAIL = 'USER_DETAIL',

  //ROOM
  ROOMS_LIST = 'ROOMS_LIST',
  ROOM_DETAIL = 'ROOMS_DETAIL',
}
