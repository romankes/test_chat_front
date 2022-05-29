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
} from 'react-native';
import {Text} from '../Text';
import {useAnimation} from './useAnimation';

import {useStyles} from './useStyles';

type TProps = TextInputProps & {
  error: FieldError | undefined;
  color?: InputKeys;
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
  ...props
}) => {
  const {styles, placeholderColor} = useStyles({
    color,
    family,
  });

  const [isTopLabel, setIsTopLabel] = useState(!!props.value);

  const {backgroundColor, borderColor, position} = useAnimation({
    color,
    errorTrigger: !!error?.message,
    labelTrigger: isTopLabel,
    value: props.value || '',
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
    <View style={[styles.wrapper, margins, !!label && {height: 86}]}>
      {label && (
        <Animated.View style={[styles.label, position]}>
          <Text
            family={isTopLabel ? 'medium' : 'light'}
            color={isTopLabel ? 'default' : 'gray'}>
            {label || ''}
          </Text>
        </Animated.View>
      )}
      <Animated.View
        style={[styles.fieldWrapper, {backgroundColor, borderColor}]}>
        {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
        <View style={styles.inputWrapper}>
          <TextInput
            {...props}
            onFocus={(e) => {
              if (!isTopLabel) {
                setIsTopLabel(true);
              }

              if (props.onFocus) {
                props.onFocus(e);
              }
            }}
            onBlur={(e) => {
              if (!props.value && isTopLabel) {
                setIsTopLabel(false);
              }

              if (props.onBlur) {
                props.onBlur(e);
              }
            }}
            placeholder=""
            placeholderTextColor={placeholderColor}
            numberOfLines={1}
            scrollEnabled={false}
            style={[styles.textInput, props.style]}
          />
        </View>
        {rightIcon && <View style={styles.rightIconWrapper}>{rightIcon}</View>}
      </Animated.View>
      {!errorEmpty && (
        <Text margin={{top: 8}} color="danger" family="light">
          {error?.message || ''}
        </Text>
      )}
    </View>
  );
};
