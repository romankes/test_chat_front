import {useMemo} from 'react';
import {useTheme} from '@/hooks';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,

          backgroundColor: pallete.background.default,
        },

        icons: {
          height: 32,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',

          paddingHorizontal: 16,
        },
        header: {
          paddingTop: (StatusBar.currentHeight || 0) + 16,

          backgroundColor: pallete.background.dark,

          height: Dimensions.get('screen').height * 0.25,

          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,

          shadowColor: pallete.background.action,
          elevation: 10,
        },
        headerInfo: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        headerMainInfo: {
          flex: 1,

          marginLeft: 16,
        },
        container: {
          paddingHorizontal: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
