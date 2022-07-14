import {Message} from '@/bus/message';
import React, {FC, useLayoutEffect, useRef} from 'react';

import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {useStyles} from './useStyles';

type TProps = FlatListProps<Message.Item | Message.WaitingItem> & {};

export const MessageLayout: FC<TProps> = ({...props}) => {
  const {styles} = useStyles();

  const ref = useRef<FlatList>(null);

  useLayoutEffect(() => {
    ref.current?.scrollToOffset({offset: 0, animated: false});
  }, [props.data]);

  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 16}}
      style={styles.wrapper}
      {...props}
      ref={ref}
      inverted
    />
  );
};
