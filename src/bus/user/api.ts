import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {User} from './namespace';

export const apiUser = new (class Api {
  fetchItems(params: User.ReqFetchItems): AxiosPromise<User.ResFetchItems> {
    return axios({url: '/users', method: 'get', params});
  }

  fetchDetail(): AxiosPromise<User.ResFetchDetail> {
    return axios({url: '/users/info', method: 'get'});
  }

  updateDetail(data: User.ReqUpdateDetail): AxiosPromise<User.ReqUpdateDetail> {
    const fd = new FormData();

    for (let key in data) {
      if (key === 'avatar' && data.avatar) {
        fd.append('avatar', {
          uri: data.avatar.uri,
          name: data.avatar.fileName,
          type: data.avatar.type,
        });

        continue;
      }

      fd.append(key, data[key as keyof User.ReqUpdateDetail]);
    }

    return axios({
      url: '/users',
      method: 'patch',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: fd,
    });
  }
  updateDeviceToken(deviceToken: string): AxiosPromise {
    return axios({
      url: '/users',
      method: 'put',
      data: {deviceToken},
    });
  }
})();
