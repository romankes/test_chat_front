import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = useMemo(() => StyleSheet.create({}), []);

  return {
    styles,
  };
};
