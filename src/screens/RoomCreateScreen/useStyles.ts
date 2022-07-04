import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,

          paddingTop: (StatusBar.currentHeight || 0) + 16,

          paddingBottom: 16,
        },

        form: {
          flex: 1,

          marginTop: 32,
        },

        container: {
          paddingHorizontal: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
