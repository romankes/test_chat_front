import {useMemo} from 'react';
import {useTheme} from '@/hooks';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        main: {
          flex: 1,
          justifyContent: 'space-between',
        },
      }),
    [pallete],
  );

  return {styles};
};
