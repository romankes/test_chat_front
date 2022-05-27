import React, {FC, useMemo} from 'react';
import {Image, View} from 'react-native';

import {useStyles} from './useStyles';

type TProps = {
  url: string | null;
  variant?: 'sqaure' | 'round';
  size?: 'small' | 'normal';
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const Avatar: FC<TProps> = ({
  url,
  size = 'normal',
  variant = 'sqaure',
  margin,
}) => {
  const {styles} = useStyles();

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  const sizeData = useMemo(() => {
    switch (size) {
      case 'normal':
        return {height: 164, width: 164};
      case 'small':
        return {height: 64, width: 64};
      default:
        return {height: 64, width: 64};
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    switch (variant) {
      case 'sqaure':
        return 8;
      case 'round':
        return 164;
      default:
        return 164;
    }
  }, [variant]);

  return (
    <View style={[styles.wrapper, sizeData, margins, {borderRadius}]}>
      {!!url && <Image style={styles.image} source={{uri: url}} />}
    </View>
  );
};