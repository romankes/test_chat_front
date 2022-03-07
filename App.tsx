import 'react-native-gesture-handler';
import React from 'react';
//store redux
import {Provider} from 'react-redux';
// import {store} from '@/store';
import {LogBox, View} from 'react-native';

// import 'react-native-gesture-handler';
// import {ThemeLayout, ToastLayout} from './layouts';
// import {AppNavigator} from './navigation';
// import {MenuProvider} from 'react-native-popup-menu';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <View></View>
    // <Provider store={store}>
    //   <ThemeLayout>
    //     <MenuProvider>
    //       <AppNavigator />
    //       <ToastLayout />
    //     </MenuProvider>
    //   </ThemeLayout>
    // </Provider>
  );
};

export default App;
