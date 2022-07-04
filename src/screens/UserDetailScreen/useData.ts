import {authActions} from '@/bus/auth';
import {userSelectors} from '@/bus/user';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelectors.getDetail);

  const onLoggout = useCallback(() => {
    dispatch(authActions.logoutAsync());
  }, []);

  return {user, onLoggout};
};
