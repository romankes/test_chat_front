import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,

          backgroundColor: pallete.background.default,
          marginHorizontal: 16,
        },
        header: {
          marginTop: StatusBar.currentHeight || 0,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        logo: {
          alignItems: 'center',

          marginTop: 64,
        },
        form: {
          flex: 1,

          marginTop: 44,
        },

        footer: {
          paddingBottom: insets.bottom,
        },
      }),
    [pallete],
  );

  return {styles};
};
