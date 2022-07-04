import axios, {AxiosError, AxiosInstance} from 'axios';
import ENV from '@/configs';
import AsyncStorage from '@react-native-community/async-storage';
import {store} from '@/store';
import {authActions} from '@/bus/auth';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 120000,
  baseURL: ENV.BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
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
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      store.dispatch(authActions.logoutAsync());
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
