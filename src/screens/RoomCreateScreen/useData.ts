import {Room, roomActions, roomSelectors} from '@/bus/room';
import {userActions} from '@/bus/user';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback, useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form';
import ActionSheet from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from './validate';

export const useData = () => {
  const dispatch = useDispatch();

  const users = useSelector(roomSelectors.getUsers);
  const ref = useRef<ActionSheet>(null);

  const {
    control,
    formState: {errors},
    setValue,
    watch,
    handleSubmit,
  } = useForm<Room.ReqCreateItem>({
    defaultValues: {
      title: '',
      users: [],
      avatar: null,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const ids = users.map(({_id}) => _id);

    setValue('users', ids);
  }, [users]);

  const onSubmit = (data: Room.ReqCreateItem) => {
    dispatch(roomActions.createItemAsync(data));
  };

  const onRemoveUser = useCallback((id: string) => {
    dispatch(roomActions.removeUser(id));
  }, []);

  return {
    users,
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    ref,
    onRemoveUser,
  };
};
