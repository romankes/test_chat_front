import {BackArrowIcon, LogoIcon, Text} from '@/components';
import {useLoader} from '@/hooks';
import React, {FC, ReactNode} from 'react';
import {Animated, SafeAreaView, TouchableOpacity, View} from 'react-native';

import {useStyles} from './useStyles';

type TProps = {
  children: ReactNode[];
  isLoading?: boolean;
  title: string;

  hasBack?: boolean;
  onBack?: () => any;

  renderFooter: ReactNode;
};

export const AuthLayout: FC<TProps> = ({
  children,
  isLoading,
  title,
  renderFooter,
  onBack = () => {},
  hasBack = false,
}) => {
  const {styles} = useStyles();
  const {renderLoader, isEnd} = useLoader({isLoading});

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.8}>
          {hasBack && <BackArrowIcon color="dark" size={18} />}
        </TouchableOpacity>
        <Text textAlign="center" size={16} family="medium">
          {title}
        </Text>
        <View />
      </View>

      <View style={styles.logo}>{renderLoader}</View>

      {!isEnd && (
        <>
          <View style={styles.form}>{children}</View>
          <View style={styles.footer}>{renderFooter}</View>
        </>
      )}
    </SafeAreaView>
  );
};
