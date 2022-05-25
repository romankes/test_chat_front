import {Fonts} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {FieldError} from 'react-hook-form';

import {
  TextInput,
  View,
  TextInputProps,
  Animated,
  Dimensions,
} from 'react-native';
import {Text} from '../Text';

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
};

export const FilledField: FC<TProps> = ({
  error,
  margin,
  color = 'default',
  family = 'regular',
  label,
  ...props
}) => {
  const {styles, placeholderColor, backgroundColors, borderColors} = useStyles({
    color,
    family,
  });

  const [isTopLabel, setIsTopLabel] = useState(!!props.value);

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  const errorAnimation = useMemo(() => new Animated.Value(0), []);
  const labelAnimation = useMemo(
    () => new Animated.Value(props.value ? 1 : 0),
    [],
  );

  // const translate = useMemo(
  //   () =>
  //     labelAnimation.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, label ? -1 * label.length * 12 : 0],
  //     }),
  //   [backgroundColors],
  // );

  //TODO create use data

  const backgroundColor = useMemo(
    () =>
      errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: backgroundColors as string[],
      }),
    [backgroundColors],
  );

  const borderColor = useMemo(
    () =>
      errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: borderColors as string[],
      }),
    [backgroundColors],
  );

  const position = useMemo(() => {
    return {
      top: labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -38],
      }),
      left: labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [8, 0],
      }),
    };
  }, [labelAnimation]);

  useEffect(() => {
    if (isTopLabel) {
      Animated.timing(labelAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(labelAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isTopLabel]);

  useEffect(() => {
    if (error?.message) {
      Animated.timing(errorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(errorAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [error]);

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
        style={[styles.inputWrapper, {backgroundColor, borderColor}]}>
        <View>
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
              console.log(props.value);

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
      </Animated.View>
      <Text margin={{top: 8}} color="danger" family="light">
        {error?.message || ''}
      </Text>
    </View>
  );
};
