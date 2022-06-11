import {uiSelectors} from '@/bus/ui';
import {userActions, userSelectors} from '@/bus/user';
import {useDebounce} from '@/hooks';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const users = useSelector(userSelectors.getItems);
  const currentPage = useSelector(userSelectors.getCurrentPage);
  const hasMore = useSelector(userSelectors.getHasMore);

  const [value, setValue] = useState('');

  const username = useDebounce(value);

  const isLoading = useSelector(uiSelectors.getLoading('user'));

  const onBootstrap = useCallback(() => {
    dispatch(
      userActions.fetchItemsAsync({
        page: 1,
        per: 10,
        username,
      }),
    );
  }, [username]);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);

  const onLoad = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(
        userActions.fetchItemsAsync({
          page: currentPage + 1,
          per: 10,
          username,
        }),
      );
    }
  }, [currentPage, hasMore, isLoading, username]);

  return {users, onLoad, isLoading, setValue, value};
};
