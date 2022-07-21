import {useTheme} from '@/hooks';
import {SwitchKeys} from '@/themes/palletes/types';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type TArgs = {
  active: boolean;
  color: keyof SwitchKeys;
};

export const useStyles = ({active, color}: TArgs) => {
  const {pallete} = useTheme();

  console.log(active);

  const thumb = useMemo(
    () => pallete.switch.thumb[color][+active],
    [pallete, active],
  );

  const track = useMemo(
    () => pallete.switch.track[color][+active],
    [pallete, active],
  );

  return {thumb, track};
};
