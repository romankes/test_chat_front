import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = ({} = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          marginTop: (StatusBar.currentHeight || 0) - insets.top,
          paddingTop: insets.top,

          height: 60 + insets.top,

          backgroundColor: pallete.background.dark,

          paddingHorizontal: 16,
        },

        contentWrapper: {
          flexDirection: 'row',
          alignItems: 'center',

          borderBottomColor: pallete.border.light,
          borderBottomWidth: 1,

          height: 38,

          paddingHorizontal: 8,
        },
        inputWrapper: {
          flex: 1,

          marginHorizontal: 8,
        },
        input: {
          backgroundColor: 'transparent',

          color: pallete.text.light,
          height: 38,
          flex: 1,
        },
      }),
    [pallete],
  ));

  return {styles};
};
