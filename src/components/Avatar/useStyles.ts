import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.background.action,

          justifyContent: 'center',
        },

        image: {
          height: '100%',
          width: '100%',

          borderRadius: 164,
        },
      }),
    [pallete],
  );

  return {styles};
};
