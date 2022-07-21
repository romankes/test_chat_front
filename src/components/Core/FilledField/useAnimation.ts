import {useTheme} from '@/hooks';
import {InputKeys} from '@/themes/palletes/types';
import {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

export type TArgs = {
  color: keyof InputKeys;

  trigger: boolean;
};

export const useAnimation = ({color, trigger}: TArgs) => {
  const {pallete} = useTheme();

  const animation = useMemo(() => new Animated.Value(0), []);

  const backgroundColors = useMemo(
    () => [pallete.input.background[color], pallete.input.background.danger],
    [pallete, color],
  );
  const borderColors = useMemo(
    () => [pallete.input.border[color], pallete.input.border.danger],
    [pallete, color],
  );

  const backgroundColor = useMemo(
    () =>
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: backgroundColors as string[],
      }),
    [backgroundColors],
  );

  const borderColor = useMemo(
    () =>
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: borderColors as string[],
      }),
    [borderColors],
  );

  useEffect(() => {
    if (trigger) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [trigger]);

  return {backgroundColor, borderColor};
};
