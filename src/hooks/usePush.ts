import {authSelectors} from '@/bus/auth';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import messaging from '@react-native-firebase/messaging';
import {userActions} from '@/bus/user';

type TAction = 'CREATE_MESSAGE';

type TData = {
  action: TAction;
  [key: string]: string;
};

export const usePush = () => {
  const dispatch = useDispatch();

  const loggined = useSelector(authSelectors.getLoggined);

  const onSetupMessaging = useCallback(async () => {
    if (loggined) {
      const deviceToken = await messaging().getToken();

      if (deviceToken) {
        dispatch(userActions.updateDeviceTokenAsync(deviceToken));

        messaging().setBackgroundMessageHandler(async (message) => {});

        messaging().onMessage((message) => {});

        messaging().onNotificationOpenedApp((message) => {
          const data = message.data as TData;

          switch (data.action) {
            case 'CREATE_MESSAGE': {
              console.log('open room', data.roomId);
            }
          }
        });
      }
    }
  }, [loggined]);

  useEffect(() => {
    onSetupMessaging();
  }, [onSetupMessaging]);
};
