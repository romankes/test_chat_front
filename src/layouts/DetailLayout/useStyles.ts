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
        },

        container: {
          paddingHorizontal: 16,
        },

        header: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          marginBottom: 8,
        },

        content: {
          paddingTop: 16,
        },

        main: {
          flexDirection: 'row',
        },
        mainContent: {
          marginLeft: 16,
          paddingVertical: 12,

          flex: 1,
        },

        list: {
          marginTop: 52,
        },
      }),
    [pallete],
  );

  return {styles};
};
