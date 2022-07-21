import {EyeIcon} from '@/components/Icons';
import {Fonts} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {FieldError} from 'react-hook-form';

import {
  TextInput,
  View,
  TextInputProps,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../Text';
import {useAnimation} from './useAnimation';

import {useStyles} from './useStyles';

type TProps = TextInputProps & {
  error: FieldError | undefined;
  color?: keyof InputKeys;
  family?: keyof typeof Fonts;
  label?: string;
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };

  rightIcon?: ReactNode;
  leftIcon?: ReactNode;

  errorEmpty?: boolean;
};

export const FilledField: FC<TProps> = ({
  error,
  margin,
  color = 'default',
  family = 'regular',
  label,
  rightIcon,
  leftIcon,
  errorEmpty = false,
  secureTextEntry,
  ...props
}) => {
  const {styles, placeholderColor} = useStyles({
    color,
    family,
  });

  const [isSecure, setIsSecure] = useState(true);

  const renderRightIcon = useMemo(() => {
    if (rightIcon) return rightIcon;

    if (secureTextEntry) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsSecure(!isSecure)}>
          <EyeIcon
            //TODO: add danger color
            color={!error?.message ? 'dark' : 'action'}
            size={22}
            isClose={isSecure}
          />
        </TouchableOpacity>
      );
    }

    return null;
  }, [rightIcon, secureTextEntry, isSecure, error?.message]);

  const {backgroundColor, borderColor} = useAnimation({
    color,
    trigger: !!error?.message,
  });

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
    <View style={margins}>
      {label && (
        <View style={styles.label}>
          <Text family="medium" color="default">
            {label || ''}
          </Text>
        </View>
      )}
      <Animated.View
        style={[styles.fieldWrapper, {backgroundColor, borderColor}]}>
        {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
        <View style={styles.inputWrapper}>
          <TextInput
            {...props}
            placeholderTextColor={placeholderColor}
            numberOfLines={1}
            scrollEnabled={false}
            secureTextEntry={secureTextEntry && isSecure}
            style={[styles.textInput, props.style]}
          />
        </View>
        {renderRightIcon && (
          <View style={styles.rightIconWrapper}>{renderRightIcon}</View>
        )}
      </Animated.View>
      {!errorEmpty && (
        <Text margin={{top: 8}} color="danger" family="light">
          {error?.message || ''}
        </Text>
      )}
    </View>
  );
};
