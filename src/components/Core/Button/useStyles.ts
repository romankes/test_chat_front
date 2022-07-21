import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@/hooks';
import {ButtonKeys} from '@/themes/palletes/types';
import {Fonts} from '@/themes';

type TArgs = {
  color: keyof ButtonKeys;
  weight: keyof typeof Fonts;
};

export const useStyles = ({color, weight}: TArgs) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.button.background[color],

          borderColor: pallete.button.border[color],
          borderWidth: 1,

          height: 40,

          paddingHorizontal: 12,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: pallete.button.text[color],
          fontFamily: fonts[weight],
        },
        leftIconWrapper: {
          marginRight: 16,
        },
        rightIcon: {
          position: 'relative',
          marginLeft: 4,
        },
      }),
    [pallete, color],
  );

  return {styles};
};
