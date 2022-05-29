import {
  CloseIcon,
  FilledField,
  Header,
  Loader,
  RoomCard,
  SearchIcon,
} from '@/components';
import {Routes} from '@/navigation';
import {RoomStackParams} from '@/navigation/RoomNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomStackParams, Routes.ROOMS_LIST>;

export const RoomListScreen: FC<TProps> = ({navigation}) => {
  const {rooms, isLoading} = useData();
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <FilledField
          leftIcon={
            <TouchableOpacity>
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
          color="action"
        />
      </View>
      <FlatList
        style={styles.container}
        data={rooms}
        keyExtractor={({_id}) => `room-${_id}`}
        ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        renderItem={({item}) => (
          <RoomCard
            room={item}
            onPress={() =>
              navigation.navigate(Routes.ROOM_DETAIL, {id: item._id})
            }
          />
        )}
      />
    </SafeAreaView>
  );
};
