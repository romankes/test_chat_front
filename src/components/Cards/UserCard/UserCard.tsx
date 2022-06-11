import React, {FC} from 'react';
import {User} from '@/bus/user';
import {Text, Avatar} from '@/components';

import {TouchableOpacity, View} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  user: User.Item;
  onPress: () => any;
};

export const UserCard: FC<TProps> = ({user, onPress}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.wrapper}>
      <Avatar
        url={null}
        letter={user.username[0]}
        size="small"
        variant="round"
      />
      <View style={styles.content}>
        <Text family="medium" size={14} numberOfLines={1} ellipsizeMode="tail">
          {user.username}
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
      {/* <View style={styles.info}>

          <Text family="light" color="action">
            {format(new Date(room.createdAt), 'HH:mm')}
          </Text>
        </View> */}
    </TouchableOpacity>
  );
};
