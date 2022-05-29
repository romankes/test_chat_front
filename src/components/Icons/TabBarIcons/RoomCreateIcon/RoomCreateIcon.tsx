import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const RoomCreateIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M15.1667 8.16666H12.8334V12.8333H8.16671V15.1667H12.8334V19.8333H15.1667V15.1667H19.8334V12.8333H15.1667V8.16666ZM14 2.33333C7.56004 2.33333 2.33337 7.55999 2.33337 14C2.33337 20.44 7.56004 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.55999 20.44 2.33333 14 2.33333ZM14 23.3333C8.85504 23.3333 4.66671 19.145 4.66671 14C4.66671 8.85499 8.85504 4.66666 14 4.66666C19.145 4.66666 23.3334 8.85499 23.3334 14C23.3334 19.145 19.145 23.3333 14 23.3333Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
