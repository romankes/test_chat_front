import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const TrashIcon: FC<TProps> = ({size, color}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 20 16" fill="none">
      <Path
        d="M13 12H17V14H13V12ZM13 4H20V6H13V4ZM13 8H19V10H13V8ZM1 14C1 15.1 1.9 16 3 16H9C10.1 16 11 15.1 11 14V4H1V14ZM12 1H9L8 0H4L3 1H0V3H12V1Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
