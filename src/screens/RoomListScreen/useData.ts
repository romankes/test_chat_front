import {roomActions} from './../../bus/room/slice';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {roomSelectors} from '@/bus/room';
import {uiSelectors} from '@/bus/ui';

export const useData = () => {
  const dispatch = useDispatch();

  const rooms = useSelector(roomSelectors.getItems);
  const isLoading = useSelector(uiSelectors.getLoading('room'));

  const onBootstrap = useCallback(() => {
    dispatch(roomActions.fetchItemsAsync({}));
  }, []);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);

  return {rooms, isLoading};
};
