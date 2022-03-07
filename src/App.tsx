import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, View} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeLayout} from './layouts';
import {AppNavigator} from '@/navigation/AppNavigator';
import {store} from './store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "[react-native-gesture-handler] react-native-gesture-handler module was not found. Make sure you're running your app on the native platform and your code is linked properly (cd ios && pod install && cd ..).",
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <AppNavigator />
      </ThemeLayout>
    </Provider>
  );
};
