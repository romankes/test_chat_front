import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

type TProps = {
  color: keyof Icon;
  size: number;
};

export const GalleryIcon: FC<TProps> = ({color = 'default', size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
