import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: Dimensions.get('window').width * 0.24,
          width: Dimensions.get('window').width * 0.24,

          position: 'relative',
        },
        button: {
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: `${pallete.background.gray as string}B0`,

          height: 24,
          width: 24,

          borderRadius: 24,

          position: 'absolute',
          top: 4,
          right: 4,
          zIndex: 2,
        },
        image: {
          width: '100%',
          height: '100%',

          borderRadius: 16,

          marginRight: Dimensions.get('window').width * 0.01,
        },
      }),
    [pallete],
  );

  return {styles};
};
