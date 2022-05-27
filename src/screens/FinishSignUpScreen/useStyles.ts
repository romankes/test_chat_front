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
          backgroundColor: pallete.background.default,
        },

        container: {
          paddingHorizontal: 16,

          height: '90%',
        },

        content: {
          flex: 1,

          justifyContent: 'center',
        },
        avatar: {
          alignSelf: 'center',

          marginBottom: 48,
        },
      }),
    [pallete],
  );

  return {styles};
};
