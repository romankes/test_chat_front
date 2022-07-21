import {SwitchKeys} from '@/themes/palletes/types';
import React, {FC} from 'react';

import {Switch as SwitchNative, SwitchProps} from 'react-native';
import {useStyles} from './useStyles';

type TProps = SwitchProps & {
  value: boolean;
  color?: keyof SwitchKeys;
};

export const Switch: FC<TProps> = ({value, color = 'default', ...props}) => {
  const {thumb, track} = useStyles({active: value, color});

  return (
    <SwitchNative
      {...props}
      thumbColor={thumb}
      trackColor={{true: track, false: track}}
      value={value}
    />
  );
};
