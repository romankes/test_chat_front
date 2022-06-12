import {Room, roomActions, roomSelectors} from '@/bus/room';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const users = useSelector(roomSelectors.getUsers);

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
    },
  });

  useEffect(() => {
    const ids = users.map(({_id}) => _id);

    setValue('users', ids);
  }, [users]);

  const onSubmit = (data: Room.ReqCreateItem) => {
    dispatch(roomActions.createItemAsync(data));
  };

  return {users, handleSubmit: handleSubmit(onSubmit), control, errors};
};
