import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import {Empty} from '@/screens';

import {RoomNavigator} from './RoomNavigator';
import {UserNavigator} from './UserNavigator';
import {useTabBarState, useTheme} from '@/hooks';
import {ChatIcon, ProfileIcon, RoomCreateIcon} from '@/components';
import {RoomCreateNavigator} from './RoomCreateNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type TabStackParamList = {
  [Routes.USER_NAVIGATOR]: undefined;
  [Routes.ROOM_CREATE_NAVIGATOR]: undefined;
  [Routes.ROOM_NAVIGATOR]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const {isShow} = useTabBarState();

  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: isShow ? 'flex' : 'none',
          backgroundColor: pallete.background.gray,
          height: 64 + insets.bottom,
          paddingBottom: 8 + insets.bottom,
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
        name={Routes.ROOM_NAVIGATOR}
        component={RoomNavigator}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <RoomCreateIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarLabel: 'Create Chat',
          tabBarStyle: {
            display: 'none',
          },
          tabBarActiveTintColor: pallete.text.action as string,
          tabBarInactiveTintColor: pallete.text.default as string,
        })}
        name={Routes.ROOM_CREATE_NAVIGATOR}
        component={RoomCreateNavigator}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarStyle: {
            display: 'none',
          },
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: pallete.text.action as string,
          tabBarInactiveTintColor: pallete.text.default as string,
        })}
        name={Routes.USER_NAVIGATOR}
        component={UserNavigator}
      />
    </TabStack.Navigator>
  );
};
