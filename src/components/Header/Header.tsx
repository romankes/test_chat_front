import {Background} from '@/themes/palletes/types';
import React, {FC, ReactNode, useMemo} from 'react';
import {View} from 'react-native';

import {useStyles} from './useStyles';

type TProps = {
  leftIcon?: 'back';
  onPressLeftIcon?: () => any;
  rightIcon?: 'close';
  onPressRightIcon?: () => any;

  color?: keyof Background;

  children?: ReactNode;
};

export const Header: FC<TProps> = ({
  color,
  children,
  leftIcon,
  onPressLeftIcon,
  onPressRightIcon,
  rightIcon,
}) => {
  const {styles} = useStyles();

  const renderLeftIcon = useMemo(() => {
    switch (leftIcon) {
      case 'back':
        return null;

      default:
        return null;
    }
  }, [leftIcon]);

  const renderRightIcon = useMemo(() => {
    switch (rightIcon) {
      case 'close':
        return null;

      default:
        return null;
    }
  }, [rightIcon]);
  return (
    <View style={styles.wrapper}>
      {renderLeftIcon}
      {children || null}
      {renderRightIcon}
    </View>
  );
};
