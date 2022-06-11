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
        header: {
          paddingTop: StatusBar.currentHeight,

          height: (StatusBar.currentHeight || 0) + 64,

          backgroundColor: pallete.background.gray,

          // marginBottom: 8,

          borderBottomColor: `${pallete.background.action as string}40`,
          borderBottomWidth: 1,

          justifyContent: 'center',

          paddingHorizontal: 8,
        },
        container: {
          paddingHorizontal: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
