import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {Avatar, Button, CloseIcon, Text} from '@/components';
import {Routes} from '@/navigation';
import {UserStackParamList} from '@/navigation/UserNavigator';
import ENV from '@/configs';

import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {useData} from './useData';

import {useStyles} from './useStyles';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_DETAIL>;

export const UserDetailScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {user, onLoggout} = useData();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <CloseIcon color="light" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(Routes.USER_DETAIL)}
          style={[styles.container, {flex: 1}]}>
          <View style={styles.headerInfo}>
            <Avatar
              size="small"
              variant="round"
              url={user && user.avatar && `${ENV.BASE_URL}/${user?.avatar}`}
              letter={user?.name[0]}
            />
            <View style={styles.headerMainInfo}>
              <Text color="light" size={14} family="medium">
                {user?.name || ''}
              </Text>
              <Text color="link" margin={{top: 8}} family="light">
                {user?.email}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {marginTop: 8}]}></ScrollView>
      <View style={styles.footer}>
        <Button onPress={onLoggout}>Loggout</Button>
      </View>
    </SafeAreaView>
  );
};
