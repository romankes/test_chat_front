import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const AttachIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 13 22" fill="none">
      <Path
        d="M11.0357 5V16.5C11.0357 18.71 9.11789 20.5 6.75003 20.5C4.38218 20.5 2.46432 18.71 2.46432 16.5V4C2.46432 2.62 3.66432 1.5 5.14289 1.5C6.62146 1.5 7.82146 2.62 7.82146 4V14.5C7.82146 15.05 7.33932 15.5 6.75003 15.5C6.16075 15.5 5.67861 15.05 5.67861 14.5V5H4.07146V14.5C4.07146 15.88 5.27146 17 6.75003 17C8.22861 17 9.42861 15.88 9.42861 14.5V4C9.42861 1.79 7.51075 0 5.14289 0C2.77503 0 0.857178 1.79 0.857178 4V16.5C0.857178 19.54 3.49289 22 6.75003 22C10.0072 22 12.6429 19.54 12.6429 16.5V5H11.0357Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
