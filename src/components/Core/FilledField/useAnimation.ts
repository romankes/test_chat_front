import {useTheme} from '@/hooks';
import {InputKeys} from '@/themes/palletes/types';
import {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

export type TArgs = {
  value: string;
  color: InputKeys;

  errorTrigger: boolean;
  labelTrigger: boolean;
};

export const useAnimation = ({
  value,
  color,
  errorTrigger,
  labelTrigger,
}: TArgs) => {
  const {pallete} = useTheme();

  const errorAnimation = useMemo(() => new Animated.Value(0), []);
  const labelAnimation = useMemo(() => new Animated.Value(value ? 1 : 0), []);

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
      errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: backgroundColors as string[],
      }),
    [backgroundColors],
  );

  const borderColor = useMemo(
    () =>
      errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: borderColors as string[],
      }),
    [backgroundColors],
  );

  const position = useMemo(() => {
    return {
      top: labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -38],
      }),
      left: labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [8, 0],
      }),
    };
  }, [labelAnimation]);

  useEffect(() => {
    if (labelTrigger) {
      Animated.timing(labelAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(labelAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [labelTrigger]);

  useEffect(() => {
    if (errorTrigger) {
      Animated.timing(errorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(errorAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [errorTrigger]);

  return {backgroundColor, borderColor, position};
};
