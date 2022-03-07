import React, {FC, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';
import {Routes} from './Routes';

import {AuthNavigator} from './AuthNavigator';
import {TabNavigator} from './TabNavigator';
import {useToken} from '../hooks';
import {Loader} from '../components/Core/Loader';

export type AppStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.TAB_NAVIGATOR]: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen
          name={Routes.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
        <AppStack.Screen name={Routes.TAB_NAVIGATOR} component={TabNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
