import React, {useCallback, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {Empty, RoomDetailScreen, RoomListScreen} from '@/screens';
import {useDispatch} from 'react-redux';
import {socketActions} from '@/bus/socket';
import {messageActions} from '@/bus/message';

export type RoomStackParams = {
  [Routes.ROOMS_LIST]: undefined;
  [Routes.ROOM_DETAIL]: {id: string};
};

const RoomStack = createStackNavigator<RoomStackParams>();

export const RoomNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //TODO: Subscribe
    dispatch(
      socketActions.createWaitingItemListener({
        command: 'subscribe',
        event: 'CREATE_MESSAGE',
        handler: (data) => {
          dispatch(messageActions.processItemAsync(data));
        },
      }),
    );

    return () => {
      //TODO: Unsubscribe
    };
  }, []);

  return (
    <RoomStack.Navigator screenOptions={{headerShown: false}}>
      <RoomStack.Screen name={Routes.ROOMS_LIST} component={RoomListScreen} />
      <RoomStack.Screen
        name={Routes.ROOM_DETAIL}
        component={RoomDetailScreen}
      />
    </RoomStack.Navigator>
  );
};
