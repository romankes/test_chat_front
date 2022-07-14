import React, {FC, useCallback, useMemo, useRef} from 'react';

import {
  Modal,
  ModalProps,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageZoom from 'react-native-image-zoom-viewer';
import {CloseIcon} from '../Icons';
import {useStyles} from './useStyles';

type TProps = ModalProps & {
  onClose: () => any;

  current: string;
  images: string[];
};

export const ImageViewer: FC<TProps> = ({
  onClose,
  images,
  current,
  ...props
}) => {
  const {styles} = useStyles();

  const ref = useRef<ImageZoom>(null);

  const index = useMemo(() => {
    const index = images.findIndex((url) => url === current);

    return index;
  }, [current, images]);

  const urls = useMemo(() => images.map((url) => ({url})), [images]);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClose}
          style={styles.headerButton}>
          <CloseIcon color="default" size={14} />
        </TouchableOpacity>
      </View>
    );
  }, []);

  const renderIndicator = useCallback((curr: number = 0, all: number = 0) => {
    const ARRS = [...Array(all).keys()];

    if (ARRS.length === 1) return <></>;

    return (
      <View style={styles.footer}>
        {ARRS.map((item) => (
          <Pressable
            onPress={() => {
              if (ref.current?.state) {
              }
            }}
            key={`indicator-${item}`}
            style={[
              styles.button,
              item + 1 === curr && styles.active,
              item + 1 === all && {marginRight: 0},
            ]}
          />
        ))}
      </View>
    );
  }, []);

  return (
    <Modal {...props} onRequestClose={onClose} visible={index !== -1}>
      <ImageZoom
        ref={ref}
        renderIndicator={renderIndicator}
        renderHeader={renderHeader}
        index={index}
        imageUrls={urls}
      />
    </Modal>
  );
};
