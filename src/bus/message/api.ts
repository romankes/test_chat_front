import {Message} from '@/bus/message';
import axios from '@/services/axios';
import {AxiosPromise} from 'axios';

export const apiMessage = new (class Api {
  createItem(data: Message.ReqCreateItem): AxiosPromise<Message.ResCreateItem> {
    const fd = new FormData();

    for (let i in data) {
      let key = i as keyof Message.ReqCreateItem;

      if (key === 'image' && data.image) {
        fd.append(key, {
          uri: data.image.uri,
          name: data.image.fileName,
          type: data.image.type,
        });

        continue;
      }

      fd.append(key, data[key]);
    }

    return axios({
      url: '/messages',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: fd,
    });
  }
})();
