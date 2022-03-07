import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
//app

type TProps = {
  width?: number | string;
  height?: number | string;
};

export const Loader: React.FC<TProps> = ({width, height}) => {

  return (
    <View
      style={[
        styles.wrapper,
        !!width && {
          width: width,
        },
        !!height && {
          height: height,
        },
      ]}>
      <ActivityIndicator color='black' size='large' />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
