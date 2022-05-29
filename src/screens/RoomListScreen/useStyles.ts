import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
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
        container: {},
      }),
    [pallete],
  );

  return {styles};
};
