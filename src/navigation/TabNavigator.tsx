import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import {Empty} from '@/screens';

import {RoomNavigator} from './RoomNavigator';
import {UserNavigator} from './UserNavigator';
import {useTabBarState, useTheme} from '@/hooks';
import {ChatIcon, InvitesIcon, ProfileIcon, RoomCreateIcon} from '@/components';
import {RoomCreateNavigator} from './RoomCreateNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type TabStackParamList = {
  [Routes.USER_NAVIGATOR]: undefined;
  [Routes.ROOM_CREATE_NAVIGATOR]: undefined;
  [Routes.INVITES_NAVIGATOR]: undefined;
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
          backgroundColor: pallete.background.dark,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarShowLabel: false,

        tabBarActiveTintColor: pallete.text.action as string,
        tabBarInactiveTintColor: pallete.text.default as string,
      }}>
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <ChatIcon color={focused ? 'action' : 'default'} size={24} />
          ),
        })}
        name={Routes.ROOM_NAVIGATOR}
        component={RoomNavigator}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <InvitesIcon color={focused ? 'action' : 'default'} size={24} />
          ),
        })}
        name={Routes.INVITES_NAVIGATOR}
        component={Empty}
      />
      <TabStack.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <RoomCreateIcon color={focused ? 'action' : 'default'} size={24} />
          ),
          tabBarStyle: {
            display: 'none',
          },
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
        })}
        name={Routes.USER_NAVIGATOR}
        component={UserNavigator}
      />
    </TabStack.Navigator>
  );
};
