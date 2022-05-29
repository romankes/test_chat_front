import {messageSelectors, messageActions} from '@/bus/message';
import {roomActions, roomSelectors} from '@/bus/room';
import {uiSelectors} from '@/bus/ui';
import {userSelectors} from '@/bus/user';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback, useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from './validate';

type TArgs = {
  id: string;
};

export const useData = ({id}: TArgs) => {
  const dispatch = useDispatch();

  const user = useSelector(userSelectors.getDetail);

  const detail = useSelector(roomSelectors.getDetail);
  const messages = useSelector(messageSelectors.getItems);
  const waitingMessages = useSelector(messageSelectors.getWaitingItems);
  const isLoading = useSelector(uiSelectors.getLoading('room'));

  const onBootstrap = useCallback(() => {
    if (id) {
      dispatch(roomActions.fetchDetailAsync({id}));
    }
  }, [id]);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);

  //TODO: add ts

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (id) {
      dispatch(
        messageActions.createItemAsync({
          room_id: id,
          ...data,
        }),
      );

      reset({text: ''});
    }
  };

  const messagesData = useMemo(() => {
    return [...messages, ...waitingMessages];
  }, [messages, waitingMessages]);

  return {
    isLoading,
    messages: messagesData,
    detail,
    user,
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
};
