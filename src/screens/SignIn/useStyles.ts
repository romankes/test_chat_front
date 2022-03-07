import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        scroll: {
          flex: 1,
          backgroundColor: '#E5E5E5',
        },
        wrapper: {
          height: '100%',
          paddingHorizontal: 16,
          paddingBottom: 20,
        },
        content: {
          paddingTop: 10,
          height: '100%',

          justifyContent: 'space-between',
          alignItems: 'center',
        },
        inputs: {
          paddingTop: 20,
          height: 90,

          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }),
    [],
  );

  return {
    styles,
  };
};
