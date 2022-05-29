import AsyncStorage from '@react-native-community/async-storage';

import {io} from 'socket.io-client';

import ENV from '@/configs';

export const createSocket = (token: string) => {
  const socket = io(ENV.BASE_URL, {
    auth: {
      token: `Bearer ${token}`,
    },
  });

  return socket;
};
