import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const SendIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 18" fill="none">
      <Path
        d="M0.653537 18L23.1428 9L0.653537 0L0.642822 7L16.7143 9L0.642822 11L0.653537 18Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
