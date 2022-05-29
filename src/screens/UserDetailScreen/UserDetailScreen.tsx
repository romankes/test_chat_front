import React from 'react';

import {Routes} from '@/navigation';
import {UserStackParamList} from '@/navigation/UserNavigator';
import {StackScreenProps} from '@react-navigation/stack';

import {useData} from './useData';
import {useStyles} from './useStyles';
import {SafeAreaView} from 'react-native';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_DETAIL>;

export const UserDetailScreen = () => {
  const {} = useData();
  const {styles} = useStyles();

  return <SafeAreaView></SafeAreaView>;
};
