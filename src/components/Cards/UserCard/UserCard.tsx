import React, {FC} from 'react';
import {User} from '@/bus/user';
import {Text, Avatar, CheckmarkIcon} from '@/components';

import {TouchableOpacity, View} from 'react-native';
import {useStyles} from './useStyles';

import ENV from '@/configs';

type TProps = {
  user: User.Item;
  onPress: () => any;

  isSelected: boolean;
};

export const UserCard: FC<TProps> = ({user, onPress, isSelected}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.wrapper, isSelected && styles.active]}>
      <Avatar
        url={user && user.avatar && `${ENV.BASE_URL}/${user?.avatar}`}
        letter={user.name[0]}
        size="small"
        variant="round"
      />
      <View style={styles.content}>
        <Text family="medium" size={14} numberOfLines={1} ellipsizeMode="tail">
          {user.name}
        </Text>
        <Text size={12} numberOfLines={1} color="action" ellipsizeMode="tail">
          {user.online ? 'Online' : 'Offline'}
        </Text>
        <Text
          family="light"
          color="link"
          numberOfLines={1}
          ellipsizeMode="tail">
          {user.email}
        </Text>
      </View>
      {isSelected && (
        <View style={styles.checkbox}>
          <CheckmarkIcon color="light" size={18} />
        </View>
      )}
      {/* <View style={styles.info}>

          <Text family="light" color="action">
            {format(new Date(room.createdAt), 'HH:mm')}
          </Text>
        </View> */}
    </TouchableOpacity>
  );
};
