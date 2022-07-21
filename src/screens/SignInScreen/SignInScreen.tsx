import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useData} from './useData';

import {Button, Text, FilledField} from '@/components';
import {Controller} from 'react-hook-form';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {Routes} from '@/navigation';
import {AuthLayout} from '@/layouts';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_IN>;

export const SignInScreen: FC<TProps> = ({navigation}) => {
  const {control, errors, handleSubmit, isLoading} = useData();

  return (
    <AuthLayout
      isLoading={isLoading}
      title="Sign In!"
      renderFooter={
        <View>
          <Button onPress={handleSubmit} margin={{top: 12}}>
            Sign In
          </Button>
          <Text textAlign="center" margin={{top: 22}}>
            Tou don`t have account?{' '}
            <Text
              color="link"
              family="medium"
              onPress={() => navigation.navigate(Routes.SIGN_UP)}>
              Sign Up!
            </Text>
          </Text>
        </View>
      }>
      <Controller
        control={control}
        name="email"
        render={({field: {name, onBlur, onChange, value}}) => (
          <FilledField
            label="Email"
            placeholder="my@custom.email"
            autoCapitalize="none"
            value={value}
            error={errors[name]}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {name, onBlur, onChange, value}}) => (
          <FilledField
            label="Password"
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry
            value={value}
            error={errors[name]}
            onChangeText={onChange}
            onBlur={onBlur}
            margin={{top: 8}}
          />
        )}
      />
    </AuthLayout>
  );
};
