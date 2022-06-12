import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {User} from './namespace';

export const apiUser = new (class Api {
  fetchItems(params: User.ReqFetchItems): AxiosPromise<User.ResFetchItems> {
    return axios({url: '/user/all', method: 'get', params});
  }

  fetchDetail(): AxiosPromise<User.ResFetchDetail> {
    return axios({url: '/user', method: 'get'});
  }

  updateDetail(data: User.ReqUpdateDetail): AxiosPromise<User.ReqUpdateDetail> {
    const fd = new FormData();

    if (data.avatar) {
      fd.append('avatar', {
        uri: data.avatar.uri,
        name: data.avatar.uri?.replace(/(.*\/)/gi, ''),
        type: data.avatar.type,
      });
    }

    fd.append('username', data.username);

    return axios({
      url: '/user',
      method: 'put',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: fd,
    });
  }
  updateDeviceToken(token: string): AxiosPromise {
    return axios({
      url: '/user/deviceToken',
      method: 'put',
      data: {token},
    });
  }
})();
