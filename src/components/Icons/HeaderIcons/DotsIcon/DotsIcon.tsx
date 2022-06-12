import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Rect} from 'react-native-svg';

type TProps = {
  color: keyof Icon;
  size: number;
};

export const DotsIcon: FC<TProps> = ({size, color}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size / 4} height={size} viewBox="0 0 4 16" fill="none">
      <Rect width="4" height="4" rx="2" fill={pallete.icon[color]} />
      <Rect y="6" width="4" height="4" rx="2" fill={pallete.icon[color]} />
      <Rect y="12" width="4" height="4" rx="2" fill={pallete.icon[color]} />
    </Svg>
  );
};
