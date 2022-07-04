import axios from '@/services/axios';
import AsyncStorage from '@react-native-community/async-storage';
import {AxiosPromise} from 'axios';
import {Auth} from './namespace';

export const apiAuth = new (class Api {
  fetchToken(): Promise<string | null> {
    return new Promise(async (res, rej) => {
      try {
        const token = (await AsyncStorage.getItem('TOKEN')) || null;

        res(token);
      } catch (e) {
        console.log(`error fetch token ${e}`);
        rej(e);
      }
    });
  }
  updateToken(token: string): Promise<boolean> {
    return new Promise(async (res, rej) => {
      try {
        await AsyncStorage.setItem('TOKEN', token);
        res(true);
      } catch (e) {
        console.log(`error save token ${e}`);
        rej(e);
      }
    });
  }
  signIn(user: Auth.ReqSignIn): AxiosPromise<Auth.ResSignIn> {
    return axios({url: '/auth/signIn', method: 'post', data: {user}});
  }
  signUp(user: Auth.ReqSignUp): AxiosPromise<Auth.ResSignUp> {
    return axios({url: '/auth/signUp', method: 'post', data: {user}});
  }
  logout(): AxiosPromise<Auth.ResSignUp> {
    return axios({url: '/auth/logout', method: 'delete'});
  }
})();
