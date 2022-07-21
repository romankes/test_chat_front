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
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10.5H5.7L14.1 2.1L12 0L0 12L12 24L14.1 21.9L5.7 13.5H24V10.5Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
