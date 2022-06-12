import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  color: keyof Icon;
  size: number;
};

export const BackArrowIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 11 16" fill="none">
      <Path
        d="M10.5466 14.12L4.43996 8L10.5466 1.88L8.66663 0L0.666626 8L8.66663 16L10.5466 14.12Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
