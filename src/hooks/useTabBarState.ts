import {getCurrent, Routes} from '@/navigation';
import {
  useRoute,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useState} from 'react';

const HIDDEN_ROUTES = [Routes.ROOM_DETAIL];

export const useTabBarState = () => {
  const [route, setRoute] = useState<typeof Routes | ''>('');

  useFocusEffect(() => {
    const currentRoute = getCurrent() as any;

    if (currentRoute) {
      setRoute(currentRoute);
    }
  });

  const isShow = useMemo(() => {
    //@ts-ignore
    return !route || !HIDDEN_ROUTES.includes(route);
  }, [route]);

  return {isShow};
};
