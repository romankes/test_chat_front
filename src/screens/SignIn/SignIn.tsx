import React, {FC, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

import {Button, Text, FilledField, Loader} from '@/components';
import {Controller} from 'react-hook-form';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {Routes} from '@/navigation/Routes';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_IN>;

export const SignIn: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();
  const {control, errors, handleSubmit, isLoading} = useData();
  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading ? (
        <Loader height={200} />
      ) : (
        <View style={styles.container}>
          <Text textAlign="center" family="medium" size={16}>
            Sign In!
          </Text>
          <View style={styles.form}>
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
            <Button onPress={handleSubmit} margin={{top: 12}}>
              Sign In
            </Button>
          </View>

          <Text textAlign="center" margin={{bottom: 32}}>
            Tou don`t have account?{' '}
            <Text
              color="link"
              family="medium"
              onPress={() => navigation.navigate(Routes.SIGN_UP)}>
              Sign Up!
            </Text>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
