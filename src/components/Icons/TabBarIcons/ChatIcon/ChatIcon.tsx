import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const ChatIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.3334 4.66666V20.0317L21.9684 18.6667H4.66671V4.66666H23.3334ZM23.3334 2.33333H4.66671C3.38337 2.33333 2.33337 3.38333 2.33337 4.66666V18.6667C2.33337 19.95 3.38337 21 4.66671 21H21L25.6667 25.6667V4.66666C25.6667 3.38333 24.6167 2.33333 23.3334 2.33333ZM21 14H7.00004V16.3333H21V14ZM21 10.5H7.00004V12.8333H21V10.5ZM21 6.99999H7.00004V9.33333H21V6.99999Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
