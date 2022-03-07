import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

import {Button, Text, FilledField} from '@/components';
import {Controller} from 'react-hook-form';
// import { AuthStackParamList } from '../../navigation/AuthNavigator';
// import { Routes } from '../../navigation';
// import { StackScreenProps } from '@react-navigation/stack';
// import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
// import { Loader } from '../../components';
// import { useToken } from '../../hooks';
export const SignIn = () => {
  const {styles} = useStyles();
  const {} = useData();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FilledField margin={{top: 12}} />
        <FilledField margin={{top: 12}} />
        <Button margin={{top: 12}}>Війти</Button>
      </View>
    </SafeAreaView>
  );
};
