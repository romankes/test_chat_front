import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          position: 'absolute',
          top: insets.top + 32,
          left: 0,
          right: 0,

          flexDirection: 'row',
          justifyContent: 'flex-end',

          paddingHorizontal: 8,
          zIndex: 2,
        },

        headerButton: {
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: `${pallete.background.gray as string}B0`,

          height: 24,
          width: 24,

          borderRadius: 24,
        },

        footer: {
          position: 'absolute',
          bottom: insets.bottom + 16,

          flexDirection: 'row',
          justifyContent: 'center',

          alignSelf: 'center',
        },
        button: {
          height: 4,
          width: 16,

          borderRadius: 3,

          borderWidth: 1,
          borderColor: pallete.border.default,
          marginRight: 4,
        },

        active: {
          backgroundColor: pallete.border.default,
        },
      }),
    [pallete],
  );

  return {styles};
};
