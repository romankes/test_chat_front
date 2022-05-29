import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import {Empty} from '@/screens';

import {RoomNavigator} from './RoomNavigator';
import {UserNavigator} from './UserNavigator';
import {useTabBarState, useTheme} from '@/hooks';
import {ChatIcon, ProfileIcon, RoomCreateIcon} from '@/components';

export type TabStackParamList = {
  [Routes.USER]: undefined;
  [Routes.ROOM_CREATE]: undefined;
  [Routes.ROOM]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const {isShow} = useTabBarState();

  const {pallete} = useTheme();

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: isShow ? 'flex' : 'none',
          backgroundColor: pallete.background.gray,
          height: 64,
          paddingBottom: 8,
        },
      }}>
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <ChatIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarLabel: 'Home',

          tabBarActiveTintColor: pallete.text.action as string,
          tabBarInactiveTintColor: pallete.text.default as string,
        })}
        name={Routes.ROOM}
        component={RoomNavigator}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <RoomCreateIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarLabel: 'Create Chat',

          tabBarActiveTintColor: pallete.text.action as string,
          tabBarInactiveTintColor: pallete.text.default as string,
        })}
        name={Routes.ROOM_CREATE}
        component={Empty}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: pallete.text.action as string,
          tabBarInactiveTintColor: pallete.text.default as string,
        })}
        name={Routes.USER}
        component={UserNavigator}
      />
    </TabStack.Navigator>
  );
};
