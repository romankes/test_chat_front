import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          marginBottom: 16,
          marginHorizontal: 16,
        },

        content: {
          height: 90,

          backgroundColor: pallete.background.gray,

          borderRadius: 16,

          flexDirection: 'row',
          alignItems: 'center',

          paddingHorizontal: 12,
        },
        info: {
          flex: 1,

          marginLeft: 16,
        },

        removeWrapper: {
          backgroundColor: pallete.background.danger,

          height: 90,
          width: 96,

          paddingVertical: 22,

          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,

          justifyContent: 'space-between',
          alignItems: 'center',

          marginLeft: -12,
        },
      }),
    [pallete],
  );

  return {styles};
};
