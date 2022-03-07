import axios, {AxiosError, AxiosInstance} from 'axios';
import {baseEnv} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 120000,
  baseURL: `${baseEnv().BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = (await AsyncStorage.getItem('TOKEN')) || '';

    // const lang = await AsyncStorage.getItem('LANGUAGE');
    // console.log(lang);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    //config.headers.location = location;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
