import {useTheme} from '@/hooks';
import {Fonts} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type TArgs = {
  color: InputKeys;
  family: keyof typeof Fonts;
};

export const useStyles = ({color, family}: TArgs) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          position: 'relative',
        },

        label: {
          height: 42,

          justifyContent: 'center',
          // alignItems: 'center',

          position: 'absolute',
          left: 8,
        },

        inputWrapper: {
          height: 42,

          borderRadius: 8,
          borderWidth: 1,
        },
        textInput: {
          height: 42,

          paddingHorizontal: 12,

          fontSize: 12,
          fontFamily: fonts[family],
          color: pallete.input.text[color],
        },
      }),
    [pallete, color, family],
  );

  const backgroundColors = useMemo(
    () => [pallete.input.background[color], pallete.input.background.danger],
    [pallete, color],
  );
  const borderColors = useMemo(
    () => [pallete.input.border[color], pallete.input.border.danger],
    [pallete, color],
  );

  return {
    styles,
    backgroundColors,
    borderColors,
    placeholderColor: pallete.text.gray as string,
  };
};
