import {User} from '@/bus/user';
import {
  Avatar,
  Button,
  FilledField,
  ImagePicker,
  InvitedUserCard,
  UserCard,
} from '@/components';
import {Routes} from '@/navigation';
import {RoomCreateStackParamList} from '@/navigation/RoomCreateNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';

import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomCreateStackParamList, Routes.ROOM_CREATE>;

export const RoomCreateScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {users, control, errors, handleSubmit, ref, onRemoveUser} = useData();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.form}>
        {/* <View onLoggout */}
        <FlatList
          ListEmptyComponent={
            <Button
              color="action"
              margin={{top: 16, right: 16, left: 16}}
              onPress={() => navigation.navigate(Routes.USER_LIST)}>
              Invite Users
            </Button>
          }
          ListHeaderComponent={
            <View style={styles.container}>
              <Controller
                control={control}
                name="avatar"
                render={({field: {onChange, value}}) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => ref.current?.show()}>
                    <Avatar
                      variant="round"
                      url={(value && value.uri) || ''}
                      center
                    />

                    <ImagePicker
                      actionSheetRef={ref}
                      onUploadItems={(items) => {
                        onChange(items[0]);
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
              <Controller
                name="title"
                render={({field: {name, onBlur, onChange, value}}) => (
                  <FilledField
                    margin={{top: 42}}
                    error={errors[name]}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    label="Room Name"
                  />
                )}
                control={control}
              />
            </View>
          }
          data={users}
          renderItem={({item}) => (
            <InvitedUserCard
              user={item}
              onRemove={() => onRemoveUser(item._id)}
            />
          )}
          keyExtractor={(user) => `user-${user._id}`}
        />
        {/* </View> */}
      </View>

      <View style={styles.container}>
        <Button onPress={handleSubmit}>Create Room</Button>
      </View>
    </SafeAreaView>
  );
};
