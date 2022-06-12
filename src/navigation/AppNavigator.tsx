import React, {FC, useCallback, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './Routes';

import {AuthNavigator} from './AuthNavigator';
// import {TabNavigator} from './TabNavigator';
import {Loader} from '../components/Core/Loader';
import {authSelectors} from '@/bus/auth';
import {appActions, appSelectors} from '@/bus/app';
import {View} from 'react-native';
import {Empty, FinishSignUpScreen} from '@/screens';

import {io} from 'socket.io-client';
import ENV from '@/configs';
import {navigationRef} from './RootNavigation';
import {TabNavigator} from './TabNavigator';
import {usePush, useSocket} from '@/hooks';

export type AppStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.TABS_NAVIGATOR]: undefined;
  [Routes.USER_DETAIL]: undefined;
  [Routes.FINISH_SIGN_UP]: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  const dispatch = useDispatch();

  const token = useSelector(authSelectors.getToken);
  const initalized = useSelector(appSelectors.getInitialized);

  useEffect(() => {
    if (!initalized) {
      dispatch(appActions.bootstrapAsync());
    } else {
      SplashScreen.hide();
    }
  }, [initalized]);

  const socket = useSocket();
  usePush();

  if (!initalized) return null;
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      }}>
      <AppStack.Navigator
        initialRouteName={token ? Routes.TABS_NAVIGATOR : Routes.AUTH_NAVIGATOR}
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen
          name={Routes.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
        <AppStack.Screen
          name={Routes.TABS_NAVIGATOR}
          component={TabNavigator}
        />
        <AppStack.Screen
          name={Routes.FINISH_SIGN_UP}
          component={FinishSignUpScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
