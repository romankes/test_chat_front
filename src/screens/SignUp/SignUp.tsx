import {Button, FilledField, Header, Text} from '@/components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {SafeAreaView, View} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

export const SignUp = () => {
  const {control, errors, handleSubmit, isLoading} = useData();

  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Header />
        <Text textAlign="center" size={16} family="medium">
          Sign Up!
        </Text>
        <View>
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
                margin={{top: 12}}
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
                secureTextEntry
                value={value}
                error={errors[name]}
                onChangeText={onChange}
                onBlur={onBlur}
                margin={{top: 12}}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {name, onBlur, onChange, value}}) => (
              <FilledField
                label="Confirm password"
                autoCapitalize="none"
                secureTextEntry
                value={value}
                error={errors[name]}
                onChangeText={onChange}
                onBlur={onBlur}
                margin={{top: 12}}
              />
            )}
          />
        </View>

        <Button onPress={handleSubmit} margin={{top: 12}}>
          Sign Up
        </Button>
      </View>
    </SafeAreaView>
  );
};
