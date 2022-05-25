import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,

          backgroundColor: pallete.background.default,
        },

        container: {
          height: '100%',

          justifyContent: 'space-between',

          paddingHorizontal: 16,

          paddingBottom: 48,
        },
      }),
    [pallete],
  );

  return {styles};
};
