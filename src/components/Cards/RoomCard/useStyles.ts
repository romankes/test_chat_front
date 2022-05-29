import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

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
        removeWrapper: {
          backgroundColor: pallete.background.danger,

          height: 90,
          width: 80,

          paddingVertical: 22,

          justifyContent: 'space-between',
          alignItems: 'center',
        },
        counter: {
          borderRadius: 100,

          backgroundColor: pallete.background.action,

          minWidth: 22,
          height: 22,

          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
        },
      }),
    [pallete],
  );

  return {styles};
};
