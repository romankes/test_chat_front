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
    const fd = new FormData();

    for (let key in room) {
      if ((key as keyof Room.ReqCreateItem) === 'users') {
        room.users.forEach((user) => {
          fd.append(`room[${key}]`, user);
        });

        continue;
      }

      if ((key as keyof Room.ReqCreateItem) === 'avatar' && room.avatar) {
        fd.append('room[avatar]', {
          uri: room.avatar.uri,
          name: room.avatar.fileName,
          type: room.avatar.type,
        });

        continue;
      }

      fd.append(`room[${key}]`, room[key as keyof Room.ReqCreateItem]);
    }

    return axios({
      url: '/rooms',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: fd,
    });
  }

  removeItem({id}: Room.ReqRemoveItem): AxiosPromise<Room.ResRemoveItem> {
    return axios({
      url: `/rooms/${id}`,
      method: 'delete',
    });
  }
})();
