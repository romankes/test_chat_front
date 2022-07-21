import React, {FC, ReactNode, useMemo} from 'react';

import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import {CloseIcon, BackArrowIcon} from '@/components';

import {useStyles} from './useStyles';

type TProps = TextInputProps & {
  hasBack?: boolean;
  onBack?: () => any;
};

export const Header: FC<TProps> = ({hasBack, onBack = () => {}, ...props}) => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        {hasBack && (
          <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
            <BackArrowIcon color="default" size={18} />
          </TouchableOpacity>
        )}
        <View style={styles.inputWrapper}>
          <TextInput {...props} style={styles.input} />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.onChangeText && props.onChangeText('')}>
          <CloseIcon color="default" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
