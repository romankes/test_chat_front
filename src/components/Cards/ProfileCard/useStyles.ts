import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          borderBottomWidth: 1,
          borderBottomColor: pallete.border.action,

          height: 52,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          paddingHorizontal: 8,
        },
      }),
    [pallete],
  );

  return {styles};
};
