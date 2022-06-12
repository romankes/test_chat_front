import React, {FC, useMemo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {
  Avatar,
  CheckmarkIcon,
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
  Pressable,
} from 'react-native';
import {useData} from './useData';

import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomCreateStackParamList, Routes.USER_LIST>;

export const UserListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {
    users,
    setValue,
    value,
    isLoading,
    onLoad,
    ids,
    onSelectUser,
    onSaveUsers,
  } = useData();

  const renderHeader = useMemo(
    () => (
      <View style={styles.header}>
        <FilledField
          leftIcon={
            <Pressable onPress={() => navigation.goBack()}>
              <CloseIcon color="light" size={16} />
            </Pressable>
          }
          rightIcon={
            <Pressable
              onPress={() => {
                if (ids.length) {
                  onSaveUsers();
                  navigation.goBack();
                }
              }}>
              {!ids.length ? (
                <SearchIcon color="light" size={16} />
              ) : (
                <CheckmarkIcon color="light" size={16} />
              )}
            </Pressable>
          }
          error={undefined}
          errorEmpty
          value={value}
          onChangeText={(value) => setValue(value)}
          color="action"
        />
      </View>
    ),
    [value, ids],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={users}
        onEndReached={onLoad}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        keyExtractor={(user) => `user-${user._id}`}
        renderItem={({item}) => (
          <UserCard
            isSelected={ids.includes(item._id)}
            onPress={() => onSelectUser(item._id)}
            user={item}
          />
        )}
      />
    </SafeAreaView>
  );
};
