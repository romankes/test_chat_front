import React, {FC, useMemo} from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Core';

import {useStyles} from './useStyles';

type TProps = {
  url: string | null;
  variant?: 'sqaure' | 'round';
  size?: 'extraSmall' | 'small' | 'normal';
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
  margin,
  letter,
  center = false,
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
      case 'extraSmall':
        return {height: 24, width: 24};
      case 'small':
        return {height: 72, width: 72};
      case 'normal':
        return {height: 164, width: 164};
      default:
        return {height: 72, width: 72};
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
