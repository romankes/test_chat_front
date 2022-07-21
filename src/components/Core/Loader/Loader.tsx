import {LogoIcon} from '@/components/Icons';
import React from 'react';
import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
//app

type TProps = {
  scale: Animated.AnimatedInterpolation;
  rotate: Animated.AnimatedInterpolation;
  height?: number;
};

export const Loader: React.FC<TProps> = ({rotate, scale, height = 172}) => {
  return (
    <Animated.View
      style={[
        {justifyContent: 'center', alignItems: 'center', height},
        {transform: [{rotate}, {scale}]},
      ]}>
      <LogoIcon color="action" size={172} />
    </Animated.View>
  );

  // return (
  //   <View
  //     style={[
  //       styles.wrapper,
  //       !!width && {
  //         width: width,
  //       },
  //       !!height && {
  //         height: height,
  //       },
  //     ]}>
  //     <ActivityIndicator color='black' size='large' />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
