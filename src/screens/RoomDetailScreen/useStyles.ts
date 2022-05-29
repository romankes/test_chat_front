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
          paddingHorizontal: 8,
        },
        footer: {
          height: 48,

          paddingHorizontal: 12,

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
