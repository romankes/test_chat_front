import React, {FC, useMemo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {
  Avatar,
  Button,
  CheckmarkIcon,
  CloseIcon,
  FilledField,
  Header,
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

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header onChangeText={setValue} />
      <FlatList
        data={users}
        onEndReached={onLoad}
        // ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        keyExtractor={(user) => `user-${user._id}`}
        renderItem={({item}) => (
          <UserCard
            isSelected={ids.includes(item._id)}
            onPress={() => onSelectUser(item._id)}
            user={item}
          />
        )}
      />
      <View style={styles.container}>
        <Button
          onPress={() => {
            if (ids.length) {
              onSaveUsers();
              navigation.goBack();
            }
          }}
          color={ids.length ? 'default' : 'disable'}>
          Invite
        </Button>
      </View>
    </SafeAreaView>
  );
};
