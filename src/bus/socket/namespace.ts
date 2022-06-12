export namespace Socket {
  export type ListenerItem = {
    event: EventListenerNames;
    handler: Handler<any>;
  };

  export type NewListenerItem = ListenerItem & {
    command: 'subscribe' | 'unsubscribe';
  };

  export type EventEmitItem = {
    event: EventEmitNames;
    data: EmitData<any>;
  };

  export type EventEmitNames = 'remove_current_room';
  export type EmitData<T> = T;

  export type EventListenerNames = 'disconnect' | 'create_message';
  export type Handler<T> = (data: T) => any;
}
