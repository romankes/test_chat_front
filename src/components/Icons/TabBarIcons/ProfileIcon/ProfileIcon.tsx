import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const ProfileIcon: FC<TProps> = ({size, color}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M14 3.325C16.03 3.325 17.675 4.97 17.675 7C17.675 9.03 16.03 10.675 14 10.675C11.97 10.675 10.325 9.03 10.325 7C10.325 4.97 11.97 3.325 14 3.325ZM14 19.075C19.1975 19.075 24.675 21.63 24.675 22.75V24.675H3.325V22.75C3.325 21.63 8.8025 19.075 14 19.075ZM14 0C10.1325 0 7 3.1325 7 7C7 10.8675 10.1325 14 14 14C17.8675 14 21 10.8675 21 7C21 3.1325 17.8675 0 14 0ZM14 15.75C9.3275 15.75 0 18.095 0 22.75V28H28V22.75C28 18.095 18.6725 15.75 14 15.75Z"
        fill={pallete.icon[color]}
      />
    </Svg>
  );
};
