import React, {FC, useCallback} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {Text, TrashIcon, Avatar} from '@/components';

import {User} from '@/bus/user';
import ENV from '@/configs';

import {useStyles} from './useStyles';

type TProps = {
  user: User.Item;
  onRemove: () => any;
};

export const InvitedUserCard: FC<TProps> = ({onRemove, user}) => {
  const {styles} = useStyles();

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
    <View style={styles.wrapper}>
      <Swipeable
        renderRightActions={renderRightActions}
        rightThreshold={200}
        onSwipeableOpen={onRemove}
        overshootRight={false}>
        <Pressable style={styles.content}>
          <Avatar
            url={user && user.avatar && `${ENV.BASE_URL}/${user?.avatar}`}
            letter={user.name[0]}
            size="small"
            variant="round"
          />
          <View style={styles.info}>
            <Text
              family="medium"
              size={14}
              numberOfLines={1}
              margin={{bottom: 8}}
              ellipsizeMode="tail">
              {user.name}
            </Text>
            <Text
              family="light"
              color="link"
              numberOfLines={1}
              ellipsizeMode="tail">
              {user.email}
            </Text>
          </View>
        </Pressable>
      </Swipeable>
    </View>
  );
};
