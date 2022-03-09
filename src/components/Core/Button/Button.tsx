import React, {FC, useMemo} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';
import {ButtonKeysIcon} from '@/themes/palletes/types';

import {useStyles} from './useStyles';
import {Fonts} from '@/themes';

type TProps = TouchableOpacityProps & {
  children: any;
  color?: ButtonKeysIcon;
  variant?: 'round' | 'square';
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
  margin,
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  const {styles} = useStyles(color, 14, weight);

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={[
        styles.wrapper,
        {borderRadius: variant === 'square' ? 8 : 16},
        {...margins},
        props.style,
      ]}>
      {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
      <Text style={styles.text}>{children}</Text>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};
