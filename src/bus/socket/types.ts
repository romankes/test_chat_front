import {Socket} from './namespace';

export type SocketState = {
  eventEmitItems: Socket.EventEmitItem[];

  waitingListenerItems: Socket.NewListenerItem[];
  bindedListenerItems: Socket.ListenerItem[];
};
