import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // a propriedade message vai começar vazia, vamos adicionar a messagem na exibição do compomonete 
  message: string = '';

  constructor() { }
}
