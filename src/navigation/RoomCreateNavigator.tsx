import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

import {RoomCreateScreen, UserListScreen} from '@/screens';

export type RoomCreateStackParamList = {
  [Routes.ROOM_CREATE]: undefined;
  [Routes.USER_LIST]: undefined;
};

const RoomCreateStack = createStackNavigator<RoomCreateStackParamList>();

export const RoomCreateNavigator = () => {
  return (
    <RoomCreateStack.Navigator screenOptions={{headerShown: false}}>
      <RoomCreateStack.Screen
        name={Routes.ROOM_CREATE}
        component={RoomCreateScreen}
      />
      <RoomCreateStack.Screen
        name={Routes.USER_LIST}
        component={UserListScreen}
      />
    </RoomCreateStack.Navigator>
  );
};
