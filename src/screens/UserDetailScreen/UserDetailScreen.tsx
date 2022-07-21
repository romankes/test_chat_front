import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {Button, ProfileCard, Switch, Text} from '@/components';
import {Routes} from '@/navigation';
import {UserStackParamList} from '@/navigation/UserNavigator';
import ENV from '@/configs';

import {View} from 'react-native';
import {useData} from './useData';

import {useStyles} from './useStyles';
import {DetailLayout} from '@/layouts';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_DETAIL>;

export const UserDetailScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {user, onLoggout} = useData();

  return (
    <DetailLayout
      title="My profile"
      onBack={() => navigation.goBack()}
      url={user?.avatar && `${ENV.BASE_URL}/${user.avatar}`}
      renderFooter={<Button onPress={onLoggout}>Loggout</Button>}
      renderHeader={
        <View style={styles.main}>
          <Text size={16} textAlign="center">
            {user?.name || 'Anonim'}
          </Text>
          <Text color="link" size={14} textAlign="center">
            {user?.email || ''}
          </Text>

          <Button margin={{top: 8}} color="outline" size="small">
            Edit profile
          </Button>
        </View>
      }>
      <ProfileCard renderItem={<Switch value />} title="Dark theme" />
      <ProfileCard renderItem={<Switch value />} title="Send notifications" />
      <ProfileCard renderItem={<Switch value />} title="Show status" />
      <ProfileCard renderItem={<Switch value />} title="Language" />
    </DetailLayout>
  );
};
