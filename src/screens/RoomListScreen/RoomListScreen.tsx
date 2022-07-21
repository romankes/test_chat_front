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
  const {rooms, isLoading, onRemove, setValue, value, onLoadMore} = useData();
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header onChangeText={setValue} value={value} />

      <FlatList
        style={styles.container}
        data={rooms}
        onEndReached={onLoadMore}
        keyExtractor={({_id}) => `room-${_id}`}
        // ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        renderItem={({item}) => (
          <RoomCard
            onRemove={() => onRemove(item._id)}
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
