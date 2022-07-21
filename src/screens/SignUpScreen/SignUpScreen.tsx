import {Button, FilledField} from '@/components';
import {AuthLayout} from '@/layouts';
import {Routes} from '@/navigation';
import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {useData} from './useData';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_UP>;

export const SignUpScreen: FC<TProps> = ({navigation}) => {
  const {control, errors, handleSubmit, isLoading} = useData();

  return (
    <AuthLayout
      title="Sign Up!"
      isLoading={isLoading}
      hasBack
      onBack={() => navigation.goBack()}
      renderFooter={
        <Button onPress={handleSubmit} margin={{top: 12}}>
          Sign Up
        </Button>
      }>
      <Controller
        control={control}
        name="email"
        render={({field: {name, onBlur, onChange, value}}) => (
          <FilledField
            label="Email"
            autoCapitalize="none"
            value={value}
            error={errors[name]}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="my@custom.email"
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

      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {name, onBlur, onChange, value}}) => (
          <FilledField
            label="Confirm password"
            placeholder="Confirm password"
            autoCapitalize="none"
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
