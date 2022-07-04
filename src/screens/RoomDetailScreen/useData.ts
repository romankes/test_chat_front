import {messageSelectors, messageActions} from '@/bus/message';
import {roomActions, roomSelectors} from '@/bus/room';
import {socketActions} from '@/bus/socket';
import {uiSelectors} from '@/bus/ui';
import {userSelectors} from '@/bus/user';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {useForm} from 'react-hook-form';
import ActionSheet from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from './validate';

type TArgs = {
  id: string;
};

export const useData = ({id}: TArgs) => {
  const dispatch = useDispatch();

  const actionsheetRef = useRef<ActionSheet>(null);

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
          roomId: id,
          ...data,
        }),
      );

      reset({text: ''});
    }
  };

  const messagesData = useMemo(() => {
    return [...messages, ...waitingMessages];
  }, [messages, waitingMessages]);

  useEffect(() => {
    return () => {
      console.log('unmount');
      dispatch(
        socketActions.createEventEmitItem({
          event: 'remove_current_room',
          data: {},
        }),
      );
    };
  }, []);

  return {
    isLoading,
    messages: messagesData,
    detail,
    user,
    control,
    handleSubmit: handleSubmit(onSubmit),
    actionsheetRef,
  };
};
