import {User} from '@/bus/user';
import {Avatar, Button, FilledField, UserCard} from '@/components';
import {Routes} from '@/navigation';
import {RoomCreateStackParamList} from '@/navigation/RoomCreateNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';

import {View, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomCreateStackParamList, Routes.ROOM_CREATE>;

export const RoomCreateScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {users, control, errors, handleSubmit} = useData();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.form}>
        {/* <View style={styles.container}> */}
        <FlatList
          ListEmptyComponent={
            <Button onPress={() => navigation.navigate(Routes.USER_LIST)}>
              Users
            </Button>
          }
          ListHeaderComponent={
            <View style={styles.container}>
              <Avatar url={null} center />
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
            <UserCard user={item} isSelected onPress={() => {}} />
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
