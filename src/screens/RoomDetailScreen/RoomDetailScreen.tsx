import {
  AttachIcon,
  Avatar,
  BackArrowIcon,
  DotsIcon,
  FilledField,
  Header,
  Loader,
  MessageCard,
  SendIcon,
  Text,
  ImagePicker,
  ImageCard,
} from '@/components';
import {Routes} from '@/navigation';
import {RoomStackParams} from '@/navigation/RoomNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useEffect, useLayoutEffect, useRef} from 'react';
import {Controller} from 'react-hook-form';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

import ENV from '@/configs';
import {MessageLayout} from '@/layouts';

type TProps = StackScreenProps<RoomStackParams, Routes.ROOM_DETAIL>;

export const RoomDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {id} = route.params;

  const {
    detail,
    isLoading,
    messages,
    user,
    control,
    handleSubmit,
    actionsheetRef,
  } = useData({
    id,
  });
  const {styles} = useStyles();

  const flatListRef = useRef<FlatList>(null);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowIcon color="default" size={22} />
        </Pressable>

        {detail && (
          <View style={styles.headerMain}>
            <Avatar
              url={detail.avatar && `${ENV.BASE_URL}/${detail.avatar}`}
              size="small"
              variant="round"
              letter={detail?.title[0]}
            />
            <View style={styles.headerInfo}>
              <Text family="bold">{detail?.title}</Text>
              <Text margin={{top: 4}} family="light">
                {detail?.users.length} peoples ({' '}
                <Text family="light" color="link">
                  {detail?.users.filter(({online}) => online).length} online
                </Text>{' '}
                )
              </Text>
            </View>
          </View>
        )}
        <View>
          <Pressable style={styles.headerRightIcon}>
            <DotsIcon size={22} color="default" />
          </Pressable>
        </View>
      </View>
      <MessageLayout
        ListEmptyComponent={isLoading ? <Loader height={200} /> : null}
        contentContainerStyle={styles.container}
        data={messages}
        onContentSizeChange={() => {
          flatListRef.current?.scrollToEnd();
        }}
        renderItem={({item, index}) => (
          <MessageCard
            prevMessage={messages[index - 1]}
            message={item}
            isMy={!item?.user || user?._id === item.user._id}
          />
        )}
        keyExtractor={({_id}) => `message-${_id}`}
      />
      <View style={styles.footer}>
        <Controller
          control={control}
          name="image"
          render={({field: {onChange, value}}) => (
            <View>
              {!!value && (
                <ImageCard onRemove={() => onChange(null)} image={value} />
              )}
              <ImagePicker
                actionSheetRef={actionsheetRef}
                onUploadItems={(items) => {
                  onChange(items[0]);
                }}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="text"
          render={({field: {onChange, onBlur, value}}) => (
            <FilledField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              leftIcon={
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => actionsheetRef.current?.show()}>
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
