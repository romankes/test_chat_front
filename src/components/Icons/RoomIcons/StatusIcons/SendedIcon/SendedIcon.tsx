import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const SendedIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M4.49995 8.1L2.39995 6L1.69995 6.7L4.49995 9.5L10.5 3.5L9.79995 2.8L4.49995 8.1Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
