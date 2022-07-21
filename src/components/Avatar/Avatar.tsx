import {Background} from '@/themes/palletes/types';
import React, {FC, useMemo} from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Core';

import {useStyles} from './useStyles';

type TProps = {
  url?: string | null;
  variant?: 'sqaure' | 'round';
  size?: 'extraSmall' | 'small' | 'normal';
  color?: keyof Background;
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
  letter?: string;
  center?: boolean;
};

export const Avatar: FC<TProps> = ({
  url,
  size = 'normal',
  variant = 'sqaure',
  color = 'gray',
  margin,
  letter,
  center = false,
}) => {
  const {styles} = useStyles({color});

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
      case 'extraSmall':
        return {height: 24, width: 24};
      case 'small':
        return {height: 64, width: 64};
      case 'normal':
        return {height: 128, width: 128};
      default:
        return {height: 64, width: 64};
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    switch (variant) {
      case 'sqaure':
        return 8;
      case 'round':
        return 128;
      default:
        return 128;
    }
  }, [variant]);

  return (
    <View
      style={[
        styles.wrapper,
        sizeData,
        margins,
        {borderRadius},
        center && {alignSelf: 'center'},
      ]}>
      {url ? (
        <Image style={styles.image} source={{uri: url}} />
      ) : (
        letter && (
          <Text textAlign="center" size={18} color="light">
            {letter.toUpperCase()}
          </Text>
        )
      )}
    </View>
  );
};
