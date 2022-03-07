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
        },
        textInput: {
          fontFamily: fonts.regular,
          color: pallete.text.default,
        },
        success: {
          borderBottomColor: pallete.border.success,
        },
        danger: {
          borderBottomColor: pallete.border.danger,
        },
        gray: {
          borderBottomColor: pallete.border.default,
        },
      }),
    [pallete],
  );

  return {styles, placeholderColor: pallete.text.gray as string};
};
