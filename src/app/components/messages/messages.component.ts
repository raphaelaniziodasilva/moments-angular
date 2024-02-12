import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // inicializando os icones de faTimes, depois volte para o html do component
  faTimes = faTimes;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
      
  }

  // crie o metodo de adicionar e limpar a mensagem no service no arquivo message.service.ts
}
