import {roomActions} from './../../bus/room/slice';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {roomSelectors} from '@/bus/room';
import {uiSelectors} from '@/bus/ui';
import {useDebounce} from '@/hooks';

const PER_PAGE = 10;

export const useData = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const title = useDebounce(value);
  const rooms = useSelector(roomSelectors.getItems);
  const isLoading = useSelector(uiSelectors.getLoading('room'));

  const hasMore = useSelector(roomSelectors.getHasMore);
  const page = useSelector(roomSelectors.getPage);

  const onBootstrap = useCallback(() => {
    dispatch(roomActions.fetchItemsAsync({title, page: 1, per: PER_PAGE}));
  }, [title]);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);

  const onRemove = useCallback((id: string) => {
    dispatch(roomActions.removeItemAsync({id}));
  }, []);

  const onLoadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      dispatch(
        roomActions.fetchItemsAsync({title, page: page + 1, per: PER_PAGE}),
      );
    }
  }, [page, hasMore, isLoading, title]);

  return {rooms, isLoading, onRemove, setValue, value, onLoadMore};
};
