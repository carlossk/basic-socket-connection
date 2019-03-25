import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message = '';
  constructor(public chatService:ChatService) { }

  ngOnInit() {
  }
  send(){
    console.log(this.message);
    this.chatService.sendMessage(this.message);
    this.message='';
  }

}
