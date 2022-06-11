import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: 90,

          backgroundColor: pallete.background.gray,

          marginBottom: 8,
          paddingHorizontal: 12,

          alignItems: 'center',
          flexDirection: 'row',
          shadowColor: pallete.background.action,
          shadowOffset: {
            height: -10,
            width: 0,
          },
          elevation: 5,
        },
        content: {
          paddingVertical: 16,
          paddingRight: 32,
          marginLeft: 16,

          height: '100%',

          justifyContent: 'space-between',
          flex: 1,
        },
        info: {
          height: '100%',

          paddingVertical: 16,

          justifyContent: 'space-between',
        },
      }),
    [pallete],
  );

  return {styles};
};
