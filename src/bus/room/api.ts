import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {Room} from './namespace';

export const apiRoom = new (class Api {
  fetchItems(params: Room.ReqFetchItems): AxiosPromise<Room.ResFetchItems> {
    return axios({
      url: '/room',
      method: 'get',
      params,
    });
  }

  fetchDetail({id}: Room.ReqFetchDetail): AxiosPromise<Room.ResFetchDetail> {
    return axios({
      url: `/room/${id}`,
      method: 'get',
    });
  }

  createItem(data: Room.ReqCreateItem): AxiosPromise<Room.ResCreateItem> {
    return axios({
      url: '/room',
      method: 'post',
      data,
    });
  }

  removeItem({id}: Room.ReqRemoveItem): AxiosPromise<Room.ResRemoveItem> {
    return axios({
      url: `/room/${id}`,
      method: 'delete',
    });
  }
})();
