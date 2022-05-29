import {authSelectors} from '@/bus/auth';
import {socketActions, socketSelectors} from '@/bus/socket';
import {createSocket} from '@/services/socket';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Socket} from 'socket.io-client';

export const useSocket = () => {
  const dispatch = useDispatch();

  const token = useSelector(authSelectors.getToken);

  const [socket, setSocket] = useState<Socket | null>(null);

  const watingListeners = useSelector(socketSelectors.getWaitingItems);
  const emitEvents = useSelector(socketSelectors.getEventEmitItems);

  const onEmit = useCallback(() => {
    if (socket && emitEvents.length) {
      emitEvents.forEach((item) => {
        socket.emit(item.event, item.data);
      });
      dispatch(socketActions.clearEventEmitItems());
    }
  }, [emitEvents]);

  useEffect(() => {
    onEmit();
  }, [onEmit]);

  const onConnect = useCallback(() => {
    if (token) {
      return createSocket(token);
    }

    return null;
  }, [token]);

  useEffect(() => {
    setSocket(onConnect());

    return () => {
      if (socket) {
        socket.disconnect();
      }

      dispatch(socketActions.clearBindedItems());
      setSocket(null);
    };
  }, [onConnect]);

  const onUpdateListeners = useCallback(() => {
    if (socket && watingListeners.length) {
      watingListeners.forEach((item) => {
        if (item.command === 'subscribe') {
          socket.on(item.event, item.handler);
        } else {
          socket.removeListener(item.event);
        }

        dispatch(
          socketActions.toggleBindedItemListener({
            event: item.event,
            handler: item.handler,
          }),
        );
      });

      dispatch(socketActions.clearWaitingItems());
    }
  }, [watingListeners]);

  useEffect(() => {
    onUpdateListeners();
  }, [onUpdateListeners]);

  return socket;
};
