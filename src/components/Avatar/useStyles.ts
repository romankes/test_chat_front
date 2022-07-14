import {useTheme} from '@/hooks';
import {Background} from '@/themes/palletes/types';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type TArgs = {
  color: keyof Background;
};

export const useStyles = ({color}: TArgs) => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.background[color],

          justifyContent: 'center',
        },

        image: {
          height: '100%',
          width: '100%',

          borderRadius: 164,
        },
      }),
    [pallete, color],
  );

  return {styles};
};
