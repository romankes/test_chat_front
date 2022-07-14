import {CloseIcon} from '@/components/Icons';
import React, {FC} from 'react';

import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Asset} from 'react-native-image-picker';
import {useStyles} from './useStyles';

type TProps = {
  image: Asset;
  onRemove: () => any;
};

export const ImageCard: FC<TProps> = ({image, onRemove}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.button}>
        <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
          <CloseIcon color="action" size={14} />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri: image.uri}} />
    </TouchableOpacity>
  );
};
