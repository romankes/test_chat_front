import {
  AttachIcon,
  FilledField,
  Header,
  Loader,
  MessageCard,
  SendIcon,
} from '@/components';
import {Routes} from '@/navigation';
import {RoomStackParams} from '@/navigation/RoomNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useEffect, useLayoutEffect, useRef} from 'react';
import {Controller} from 'react-hook-form';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomStackParams, Routes.ROOM_DETAIL>;

export const RoomDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {id} = route.params;

  const {detail, isLoading, messages, user, control, handleSubmit} = useData({
    id,
  });
  const {styles} = useStyles();

  const flatListRef = useRef<FlatList>(null);

  useLayoutEffect(() => {
    if (messages.length) {
      flatListRef.current?.scrollToEnd();
    }
  }, [messages, flatListRef]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <FlatList
        ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        ref={flatListRef}
        style={styles.container}
        data={messages}
        renderItem={({item}) => (
          <MessageCard
            message={item}
            isMy={!item?.user || user?._id === item.user._id}
          />
        )}
        keyExtractor={({_id}) => `message-${_id}`}
      />
      <View style={styles.footer}>
        <Controller
          control={control}
          name="text"
          render={({field: {onChange, onBlur, value}}) => (
            <FilledField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              leftIcon={
                <TouchableOpacity activeOpacity={0.6}>
                  <AttachIcon size={24} color="light" />
                </TouchableOpacity>
              }
              rightIcon={
                <TouchableOpacity activeOpacity={0.6} onPress={handleSubmit}>
                  <SendIcon size={24} color="light" />
                </TouchableOpacity>
              }
              error={undefined}
              color="action"
              errorEmpty
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
