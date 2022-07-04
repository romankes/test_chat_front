import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {Room} from './namespace';

export const apiRoom = new (class Api {
  fetchItems(params: Room.ReqFetchItems): AxiosPromise<Room.ResFetchItems> {
    return axios({
      url: '/rooms',
      method: 'get',
      params,
    });
  }

  fetchDetail({id}: Room.ReqFetchDetail): AxiosPromise<Room.ResFetchDetail> {
    return axios({
      url: `/rooms/${id}`,
      method: 'get',
    });
  }

  createItem(room: Room.ReqCreateItem): AxiosPromise<Room.ResCreateItem> {
    return axios({
      url: '/rooms',
      method: 'post',
      data: {room},
    });
  }

  removeItem({id}: Room.ReqRemoveItem): AxiosPromise<Room.ResRemoveItem> {
    return axios({
      url: `/rooms/${id}`,
      method: 'delete',
    });
  }
})();
