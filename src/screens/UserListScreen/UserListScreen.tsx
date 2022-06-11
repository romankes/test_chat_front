import React, {FC, useMemo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {
  Avatar,
  CloseIcon,
  FilledField,
  Loader,
  SearchIcon,
  Text,
  UserCard,
} from '@/components';
import {Routes} from '@/navigation';
import {RoomCreateStackParamList} from '@/navigation/RoomCreateNavigator';
import ENV from '@/configs';

import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {useData} from './useData';

import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomCreateStackParamList, Routes.USER_LIST>;

export const UserListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {users, setValue, value, isLoading, onLoad} = useData();

  const renderHeader = useMemo(
    () => (
      <View style={styles.header}>
        <FilledField
          leftIcon={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <CloseIcon color="light" size={16} />
            </TouchableOpacity>
          }
          rightIcon={
            <TouchableOpacity>
              <SearchIcon color="light" size={16} />
            </TouchableOpacity>
          }
          error={undefined}
          errorEmpty
          value={value}
          onChangeText={(value) => setValue(value)}
          color="action"
        />
      </View>
    ),
    [value],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={users}
        onEndReached={onLoad}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        keyExtractor={(user) => `user-${user._id}`}
        renderItem={({item}) => <UserCard onPress={() => {}} user={item} />}
      />
    </SafeAreaView>
  );
};
