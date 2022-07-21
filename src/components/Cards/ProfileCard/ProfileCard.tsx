import React, {FC, ReactNode} from 'react';

import {Text} from '@/components';
import {View} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  title: string;

  renderItem: ReactNode;
};

export const ProfileCard: FC<TProps> = ({title, renderItem}) => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <Text size={16}>{title}</Text>

      {renderItem}
    </View>
  );
};
