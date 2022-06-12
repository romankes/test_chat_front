import {Room} from '@/bus/room';
import {Text, Avatar, TrashIcon} from '@/components';
import React, {FC, useCallback, useMemo} from 'react';
import {View, Pressable} from 'react-native';

import {format} from 'date-fns';

import {useStyles} from './useStyles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type TProps = {
  room: Room.Item;
  onPress: () => any;
  onRemove: () => any;
};

export const RoomCard: FC<TProps> = ({onPress, room, onRemove}) => {
  const {styles} = useStyles();

  const renderName = useMemo(() => {
    if (!room.title) {
      if (room.users.length) {
        return room.users.map(({username}) => username).join(', ');
      }

      return `Anonim`;
    }

    return room.title;
  }, [room]);

  const renderRightActions = useCallback((progress, dragX) => {
    return (
      <View style={[styles.removeWrapper]}>
        <TrashIcon color="light" size={24} />
        <Text family="light" color="light">
          Remove
        </Text>
      </View>
    );
  }, []);

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      rightThreshold={200}
      onSwipeableOpen={onRemove}
      overshootRight={false}>
      <Pressable style={styles.wrapper} onPress={onPress}>
        <Avatar
          url={null}
          letter={renderName[0]}
          size="small"
          variant="round"
        />
        <View style={styles.content}>
          <Text
            family="medium"
            size={14}
            numberOfLines={1}
            ellipsizeMode="tail">
            {renderName}
          </Text>
          <Text family="light" numberOfLines={1} ellipsizeMode="tail">
            {room.message?.text || 'Chat was created'}
          </Text>
        </View>
        <View style={styles.info}>
          {!!room.notReadCount && (
            <View style={styles.counter}>
              <Text color="light" size={10}>
                {room.notReadCount}
              </Text>
            </View>
          )}
          <Text family="light" color="action">
            {format(new Date(room.createdAt), 'HH:mm')}
          </Text>
        </View>
      </Pressable>
    </Swipeable>
  );
};
