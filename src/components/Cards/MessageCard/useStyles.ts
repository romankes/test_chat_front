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
          marginTop: 16,
          marginBottom: -10,
        },
        image: {
          height: Dimensions.get('window').width * 0.45,
          width: Dimensions.get('window').width * 0.55,

          borderRadius: 8,

          marginBottom: 8,
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
        dateWrapper: {
          paddingHorizontal: 16,
          paddingVertical: 8,

          borderRadius: 32,

          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',

          marginVertical: 4,

          backgroundColor: pallete.background.dark,
        },
      }),
    [pallete],
  );

  return {styles};
};
