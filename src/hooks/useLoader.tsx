import React from 'react';

import {Loader} from '@/components';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';

type TArgs = {
  isLoading?: boolean;
  height?: number;
};

export const useLoader = ({isLoading, height}: TArgs) => {
  const [isEnd, setisEnd] = useState(isLoading);
  const ref = useRef(false);

  const animated = useMemo(() => new Animated.Value(0), []);

  const onStop = useCallback(() => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ).stop();
  }, []);

  const onStart = useCallback(() => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ).start();
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      onStart();
      setisEnd(isLoading);

      ref.current = true;
    } else {
      if (ref.current) {
        animated.addListener(({value}) => {
          if (value === 1) {
            setisEnd(isLoading);
            onStop();

            animated.removeAllListeners();
          }
        });
      }
    }
  }, [onStart]);

  const rotate = useMemo(
    () =>
      animated.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    [],
  );

  const scale = useMemo(
    () =>
      animated.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.8, 1],
      }),
    [],
  );

  const renderLoader = useMemo(
    () => <Loader scale={scale} rotate={rotate} height={height} />,
    [rotate, scale],
  );

  return {isEnd, renderLoader};
};
