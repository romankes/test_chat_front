import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {User} from './namespace';

export const apiUser = new (class Api {
  fetchDetail(): AxiosPromise<User.ResFetchDetail> {
    return axios({url: '/user/', method: 'get'});
  }
})();
