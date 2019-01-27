import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  constructor(private socket: Socket) {

    this.checkStatus();
   }

  checkStatus() {

    this.socket.on('connect', () => {

      console.log('server connection');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {

      console.log('server disconnected');
      this.socketStatus = false;
    });
  }
  emit( evento: string, payload?: any, callback?: Function) {
console.log('Emit event');

    this.socket.emit(evento , payload, callback);

  }
}
