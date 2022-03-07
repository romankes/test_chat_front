import React, {FC, useMemo} from 'react';
import {FieldError} from 'react-hook-form';

import {TextInput, View, TextInputProps} from 'react-native';

import {useStyles} from './useStyles';

type TProps = TextInputProps & {
  error: FieldError | undefined;
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const FilledField: FC<TProps> = ({error, margin, ...props}) => {
  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  const {styles, placeholderColor} = useStyles();

  return (
    <View
      style={[
        styles.input,
        error?.message
          ? styles.danger
          : props.value
          ? styles.success
          : styles.gray,
        margins,
      ]}>
      <TextInput
        placeholderTextColor={placeholderColor}
        numberOfLines={1}
        scrollEnabled={false}
        style={[styles.textInput, props.style]}
        {...props}
      />
    </View>
  );
};
