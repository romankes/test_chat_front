import axios, {AxiosError, AxiosInstance} from 'axios';
import {_apiBase} from '@/configs';
import AsyncStorage from '@react-native-community/async-storage';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 120000,
  baseURL: _apiBase,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = (await AsyncStorage.getItem('TOKEN')) || '';

    const lang = await AsyncStorage.getItem('LANGUAGE');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    //config.headers.location = location;

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
