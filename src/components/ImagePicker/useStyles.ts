import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: 154,
          backgroundColor: pallete.background.dark,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,

          justifyContent: 'center',
        },

        content: {
          paddingVertical: 20,
          paddingHorizontal: 24,
        },
        button: {
          flexDirection: 'row',
          alignItems: 'center',
          height: 32,

          marginBottom: 12,
        },
      }),
    [pallete],
  );

  return {styles};
};
