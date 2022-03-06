import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeLayout} from './layouts';
import {store} from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <View></View>
      </ThemeLayout>
    </Provider>
  );
};
