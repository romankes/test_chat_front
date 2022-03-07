import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@/hooks';
import {ButtonKeysIcon} from '@/themes/palletes/types';
import {Fonts} from '@/themes';

export const useStyles = (
  color: ButtonKeysIcon,
  size: number,
  weight: keyof typeof Fonts,
) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.button.background[color],
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 12,
          flexWrap: 'nowrap',
          flexDirection: 'row',
        },
        text: {
          color: pallete.button.text[color],
          fontSize: size,
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
