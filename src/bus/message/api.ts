import {Message} from '@/bus/message';
import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
export const apiMessage = new (class Api {
  createItem(data: Message.ReqCreateItem): AxiosPromise<Message.ResCreateItem> {
    return axios({
      url: '/messages',
      method: 'post',
      data,
    });
  }
})();
