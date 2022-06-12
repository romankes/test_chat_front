import {Room, roomActions} from '@/bus/room';
import {uiSelectors} from '@/bus/ui';
import {userActions, userSelectors} from '@/bus/user';
import {useDebounce} from '@/hooks';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const users = useSelector(userSelectors.getItems);
  const currentPage = useSelector(userSelectors.getCurrentPage);
  const hasMore = useSelector(userSelectors.getHasMore);

  const [ids, setIds] = useState<string[]>([]);
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

  const onSelectUser = useCallback(
    (id) => {
      const includes = ids.includes(id);

      if (includes) {
        setIds((ids) => ids.filter((_id) => _id !== id));
      } else {
        setIds((ids) => [...ids, id]);
      }
    },
    [ids],
  );

  const selectedUser = useMemo(() => {
    return ids
      .map((_id) => {
        const user = users.find((user) => user._id === _id);

        return user;
      })
      .filter((user) => user);
  }, [users, ids]);

  const onSaveUsers = useCallback(() => {
    dispatch(roomActions.saveUsers(selectedUser as Room.User[]));
  }, [selectedUser]);

  return {
    users,
    onLoad,
    isLoading,
    setValue,
    value,
    onSelectUser,
    ids,
    selectedUser,
    onSaveUsers,
  };
};
