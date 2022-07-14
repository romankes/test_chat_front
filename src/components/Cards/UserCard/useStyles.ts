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

          marginTop: 12,
          marginHorizontal: 12,
          paddingHorizontal: 12,

          alignItems: 'center',
          flexDirection: 'row',

          borderRadius: 16,
        },
        active: {},
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
        checkbox: {
          borderWidth: 1,
          borderColor: pallete.border.default,
          borderRadius: 8,

          height: 28,
          width: 28,
          backgroundColor: pallete.background.action,

          alignSelf: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
