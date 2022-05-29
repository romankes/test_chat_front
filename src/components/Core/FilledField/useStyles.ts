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

        fieldWrapper: {
          height: 42,

          borderRadius: 8,
          borderWidth: 1,

          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',

          paddingHorizontal: 8,
        },

        inputWrapper: {
          flexGrow: 1,
          flexShrink: 1,
        },
        textInput: {
          height: 42,

          paddingHorizontal: 12,

          fontSize: 12,
          fontFamily: fonts[family],
          color: pallete.input.text[color],
        },

        leftIconWrapper: {
          flexShrink: 0,
        },
        rightIconWrapper: {
          flexShrink: 0,
          paddingRight: 5,
        },
      }),
    [pallete, color, family],
  );

  return {
    styles,
    placeholderColor: pallete.text.gray as string,
  };
};
