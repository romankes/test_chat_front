import {Button} from '@/components';
import {Routes} from '@/navigation';
import {RoomCreateStackParamList} from '@/navigation/RoomCreateNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';

import {View, SafeAreaView} from 'react-native';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<RoomCreateStackParamList, Routes.ROOM_CREATE>;

export const RoomCreateScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.form}></View>

      <View style={styles.container}>
        <Button onPress={() => navigation.navigate(Routes.USER_LIST)}>
          Users
        </Button>
      </View>
    </SafeAreaView>
  );
};
