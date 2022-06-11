import {userSelectors} from '@/bus/user';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelectors.getDetail);

  return {user};
};
