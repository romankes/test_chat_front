import AsyncStorage from '@react-native-community/async-storage';

import {io} from 'socket.io-client';

import ENV from '@/configs';

export const createSocket = () => {
  const socket = io(ENV.BASE_URL, {
    withCredentials: true,
  });

  return socket;
};
