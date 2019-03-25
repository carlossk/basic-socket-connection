import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic';
  message: string;
  constructor(public wsService: WebsocketService, public chatService: ChatService) {
  }
  ngOnInit() {


  }
  sendMessage(){
    console.log(this.message);
    this.chatService.sendMessage(this.message);

  }
}
