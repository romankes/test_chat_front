import React from 'react';

import {Empty, UserDetailScreen} from '@/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

export type UserStackParamList = {
  [Routes.USER_DETAIL]: undefined;
};

const UserStack = createStackNavigator<UserStackParamList>();

export const UserNavigator = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name={Routes.USER_DETAIL}
        component={UserDetailScreen}
      />
    </UserStack.Navigator>
  );
};
