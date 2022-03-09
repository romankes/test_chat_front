import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        input: {
          borderBottomWidth: 1,
          height: 38,
          borderBottomColor: pallete.border.default,
        },
        textInput: {
          height: 38,

          fontFamily: fonts.regular,
          color: pallete.text.default,
        },
      }),
    [pallete],
  );

  return {styles, placeholderColor: pallete.text.gray as string};
};
