import React, {FC, useMemo} from 'react';
import {Text as TextNative, TextProps} from 'react-native';
import {Fonts, TextColors} from '@/themes';
import {useStyles} from './useStyles';

type TProps = TextProps & {
  children: any;
  color?: keyof TextColors;
  size?: number;
  textAlign?: 'center' | 'left' | 'right';
  family?: keyof typeof Fonts;
  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const Text: FC<TProps> = ({
  children,
  size = 12,
  color = 'default',
  margin,
  textAlign = 'left',
  family = 'regular',
  ...props
}) => {
  const {styles} = useStyles(color, size, family);

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  return (
    <TextNative
      style={[styles.text, {...margins}, props.style, {textAlign: textAlign}]}
      {...props}>
      {children}
    </TextNative>
  );
};
