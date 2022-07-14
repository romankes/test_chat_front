import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
        },
        header: {
          paddingTop: (StatusBar.currentHeight || 0) + insets.top,
          marginTop: -insets.top,

          height: (StatusBar.currentHeight || 0) + insets.top + 100,

          backgroundColor: pallete.background.gray,

          // marginBottom: 8,

          borderBottomColor: `${pallete.background.action as string}40`,
          borderBottomWidth: 1,

          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',

          paddingHorizontal: 8,
        },
        headerMain: {
          alignItems: 'center',
          flexDirection: 'row',

          flex: 1,

          marginHorizontal: 16,
        },
        headerInfo: {
          justifyContent: 'space-between',
          flex: 1,

          marginLeft: 12,
        },
        container: {
          paddingHorizontal: 8,

          justifyContent: 'flex-end',
        },

        headerRightIcon: {
          marginRight: 8,
        },
        footer: {
          minHeight: 48 + insets.bottom,

          marginBottom: -insets.bottom,
          paddingHorizontal: 12,
          paddingBottom: insets.bottom - 6,
          paddingTop: 16,

          backgroundColor: pallete.background.action,

          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,

          justifyContent: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
