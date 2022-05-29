import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          // flexDirection: 'row',
        },

        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          marginBottom: 8,
        },
        content: {
          backgroundColor: pallete.background.gray,

          maxWidth: Dimensions.get('window').width * 0.6,

          padding: 8,
          marginTop: 8,

          borderRadius: 8,

          alignSelf: 'flex-start',
        },
        footer: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
