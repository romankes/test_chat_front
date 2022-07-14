import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import {Path, Svg} from 'react-native-svg';

type TPops = {
  size: number;
  color?: keyof Icon;
};

export const CameraIcon: FC<TPops> = ({color = 'default', size}) => {
  const {pallete} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 22 20" fill="none">
      <Path
        d="M7 0L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0H7ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
