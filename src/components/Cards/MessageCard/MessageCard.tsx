import {Message} from '@/bus/message';
import {Text, Avatar, WaitingIcon, SendedIcon} from '@/components';
import React, {FC, useMemo} from 'react';
import {View} from 'react-native';

import {useStyles} from './useStyles';

import ENV from '@/configs';
import {format} from 'date-fns';

type TProps = {
  message: Message.Item;

  isMy: boolean;
};

export const MessageCard: FC<TProps> = ({message, isMy}) => {
  const {styles} = useStyles();

  const renderStatus = useMemo(() => {
    switch (message.status) {
      case 'waiting':
        return <WaitingIcon color="action" size={12} />;
      case 'sended':
        return <SendedIcon color="action" size={12} />;
    }
  }, [message.status]);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.content, isMy && {alignSelf: 'flex-end'}]}>
        {!isMy && (
          <View style={styles.header}>
            <Avatar
              url={`${ENV.BASE_URL}/${message.user.avatar}`}
              size="extraSmall"
              variant="round"
              letter={'A'}
            />
            <Text
              margin={{left: 8, right: 16}}
              numberOfLines={1}
              ellipsizeMode="tail"
              size={14}>
              {message.user.username}
            </Text>
            <Text color="action" size={10} family="light">
              {format(new Date(message.createdAt), 'HH:mm')}
            </Text>
          </View>
        )}
        <Text>{message.text}</Text>
        {isMy && (
          <View style={styles.footer}>
            <Text color="action" family="light" size={10} margin={{right: 8}}>
              {format(new Date(message.createdAt), 'HH:mm')}
            </Text>
            {renderStatus}
          </View>
        )}
      </View>
    </View>
  );
};
