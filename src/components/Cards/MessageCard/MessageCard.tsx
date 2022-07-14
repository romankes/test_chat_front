import {Message} from '@/bus/message';
import {Text, Avatar, WaitingIcon, SendedIcon, ImageViewer} from '@/components';
import React, {FC, useMemo, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {useStyles} from './useStyles';

import ENV from '@/configs';
import {format} from 'date-fns';

type TProps = {
  message: Message.Item | Message.WaitingItem;
  prevMessage: Message.Item | null;
  isMy: boolean;
};

export const MessageCard: FC<TProps> = ({message, prevMessage, isMy}) => {
  const {styles} = useStyles();

  const [currentImage, setCurrentImage] = useState('');

  const renderDate = useMemo(() => {
    const currDay = new Date(message.createdAt).getDay();
    const prevDay = prevMessage
      ? new Date(prevMessage.createdAt).getDay()
      : currDay;

    if (currDay !== prevDay && prevMessage) {
      return format(new Date(prevMessage.createdAt), 'dd.MM.yyyy ');
    }

    return null;
  }, [prevMessage, message]);

  const renderStatus = useMemo(() => {
    switch (message.status) {
      case 'waiting':
        return <WaitingIcon color="action" size={12} />;
      case 'sended':
        return <SendedIcon color="action" size={12} />;
    }
  }, [message.status]);

  const imagesUrl = useMemo(
    () => (message.image ? [`${ENV.BASE_URL}/${message.image}`] : []),
    [message],
  );

  return (
    <View style={styles.wrapper}>
      {renderDate && (
        <View style={styles.dateWrapper}>
          <Text size={14} color="light" family="medium" textAlign="center">
            {renderDate}
          </Text>
        </View>
      )}

      <View style={[styles.content, isMy && {alignSelf: 'flex-end'}]}>
        {!isMy && (
          <View style={styles.header}>
            <Avatar
              url={`${ENV.BASE_URL}/${message.user.avatar}`}
              size="extraSmall"
              variant="round"
              letter={message.user.name[0] || ''}
            />
            <Text
              margin={{left: 8, right: 16}}
              numberOfLines={1}
              ellipsizeMode="tail"
              size={14}>
              {message.user.name}
            </Text>

            {message.image != 'null' && !!message.image && (
              <Image
                style={styles.image}
                source={{
                  uri: `${ENV.BASE_URL}/${message.image}`,
                }}
              />
            )}
            <Text color="action" size={10} family="light">
              {format(new Date(message.createdAt), 'HH:mm')}
            </Text>
          </View>
        )}
        {!!message.image && message.image != 'null' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCurrentImage(`${ENV.BASE_URL}/${message.image}`)}>
            <Image
              style={styles.image}
              source={{
                uri: `${ENV.BASE_URL}/${message.image}` || '',
              }}
            />
          </TouchableOpacity>
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

      <ImageViewer
        current={currentImage}
        images={imagesUrl}
        onClose={() => setCurrentImage('')}
      />
    </View>
  );
};
