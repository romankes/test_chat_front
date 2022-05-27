import React, {FC, RefObject} from 'react';
import {CameraIcon, GalleryIcon} from '@/components';

import {TouchableOpacity, View} from 'react-native';

import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import ActionSheet, {ActionSheetProps} from 'react-native-actions-sheet';
import {Text} from '..';
import {useStyles} from './useStyles';

type TProps = ActionSheetProps & {
  actionSheetRef: RefObject<ActionSheet>;
  onUploadItems: (images: Asset[]) => any;
};

export const ImagePicker: FC<TProps> = ({
  actionSheetRef,
  onUploadItems,
  ...props
}) => {
  const {styles} = useStyles();

  const onOpenCamera = async () => {
    if (actionSheetRef.current) {
      const response = await launchCamera({
        cameraType: 'back',
        quality: 1,
        mediaType: 'photo',
      });

      if (!response.didCancel && response?.assets && response.assets.length) {
        onUploadItems(response.assets);
      }

      actionSheetRef.current.hide();
    }
  };

  const onOpenGallery = async () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
      const response = await launchImageLibrary({
        quality: 1,
        mediaType: 'photo',
      });

      if (!response.didCancel && response.assets && response.assets.length) {
        onUploadItems(response.assets);
      }
    }
  };

  return (
    <ActionSheet
      {...props}
      ref={actionSheetRef}
      containerStyle={styles.wrapper}>
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={onOpenGallery}>
          <GalleryIcon size={24} color="light" />
          <Text color="light" margin={{left: 8}}>
            Pick from gallery!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={onOpenCamera}>
          <CameraIcon size={24} color="light" />
          <Text color="light" margin={{left: 8}}>
            Take a photo!
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};
