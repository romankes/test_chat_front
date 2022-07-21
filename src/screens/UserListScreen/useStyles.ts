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
        wrapper: {
          flex: 1,

          backgroundColor: pallete.background.default,
        },
        container: {
          paddingHorizontal: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
