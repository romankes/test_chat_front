import React, {FC, useMemo} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';
import {ButtonKeys} from '@/themes/palletes/types';

import {useStyles} from './useStyles';
import {Fonts} from '@/themes';

type TProps = TouchableOpacityProps & {
  children: any;
  color?: keyof ButtonKeys;
  variant?: 'round' | 'square';
  size?: 'normal' | 'small';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  weight?: keyof typeof Fonts;
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const Button: FC<TProps> = ({
  children,
  color = 'default',
  variant = 'square',
  weight = 'regular',
  size = 'normal',
  margin,
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  const {styles} = useStyles({color, weight});

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  const height = useMemo(() => {
    switch (size) {
      case 'small':
        return 36;
      case 'normal':
        return 52;
      default:
        return 52;
    }
  }, [size]);

  const fontSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 12;
      case 'normal':
        return 16;
      default:
        return 16;
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    switch (variant) {
      case 'round':
        return 16;
      case 'square':
        return 16;
    }
  }, [variant]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={[styles.wrapper, {...margins, borderRadius, height}, props.style]}>
      {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
      <Text style={[styles.text, {fontSize}]}>{children}</Text>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};
