import {Icon} from '@/themes/palletes/types';
import {useTheme} from '@/hooks';
import React, {FC} from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const CloseIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Rect
        width="20.046"
        height="2.50576"
        rx="1.25288"
        transform="matrix(0.704728 0.709478 -0.704728 0.709478 1.87305 0)"
        fill={pallete.icon[color]}
      />
      <Path
        d="M0.882938 15.1111C0.395305 14.6202 0.395305 13.8243 0.882938 13.3333L13.2441 0.888899C13.7317 0.397979 14.5223 0.397978 15.0099 0.888898C15.4976 1.37982 15.4976 2.17576 15.0099 2.66668L2.64882 15.1111C2.16118 15.602 1.37057 15.602 0.882938 15.1111Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
