import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.background.default,
          flex: 1,
        },
        container: {
          paddingTop: (StatusBar.currentHeight || 0) + 32,

          height: '100%',

          paddingHorizontal: 16,

          justifyContent: 'space-between',
        },

        form: {},
      }),
    [],
  );

  return {
    styles,
  };
};
