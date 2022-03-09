import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

import {Button, Text, FilledField, Loader} from '@/components';
import {Controller} from 'react-hook-form';
// import { AuthStackParamList } from '../../navigation/AuthNavigator';
// import { Routes } from '../../navigation';
// import { StackScreenProps } from '@react-navigation/stack';
// import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
// import { Loader } from '../../components';
// import { useToken } from '../../hooks';
export const SignIn = () => {
  const {styles} = useStyles();
  const {control, errors, handleSubmit, isLoading} = useData();
  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading ? (
        <Loader height={200} />
      ) : (
        <View style={styles.container}>
          <Controller
            control={control}
            name="email"
            render={({field: {name, onBlur, onChange, value}}) => (
              <FilledField
                autoCapitalize="none"
                value={value}
                error={errors[name]}
                onChangeText={onChange}
                onBlur={onBlur}
                margin={{top: 12}}
                placeholder="Email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({field: {name, onBlur, onChange, value}}) => (
              <FilledField
                autoCapitalize="none"
                secureTextEntry
                value={value}
                error={errors[name]}
                onChangeText={onChange}
                onBlur={onBlur}
                margin={{top: 12}}
                placeholder="Пароль"
              />
            )}
          />
          <Button onPress={handleSubmit} margin={{top: 12}}>
            Війти
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};
