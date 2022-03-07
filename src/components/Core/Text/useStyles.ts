import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useTheme} from '@/hooks';
import {TextColors, Fonts} from '@/themes';

export const useStyles = (
  color: keyof TextColors,
  size: number,
  family: keyof typeof Fonts,
) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: pallete.text[color],
          fontFamily: fonts[family],
          fontSize: size,
        },
      }),
    [pallete, color, size, family],
  );

  return {styles};
};
