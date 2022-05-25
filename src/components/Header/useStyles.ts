import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = ({} = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          marginTop: StatusBar.currentHeight,
        },
      }),
    [pallete],
  ));

  return {styles};
};
