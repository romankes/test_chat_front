import React, {FC, useEffect} from 'react';
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

export type AppStackParamList = {
  [Routes.AUTH]: undefined;
  [Routes.TABS]: undefined;
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

  if (!initalized) return null;
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!token && (
          <AppStack.Screen name={Routes.AUTH} component={AuthNavigator} />
        )}
        {/* <AppStack.Screen name={Routes.TABS} component={TabNavigator} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
