import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // a propriedade message vai começar vazia, vamos adicionar a messagem na exibição do compomonete 
  message: string = '';

  constructor() { }

  // adicionando uma messagem
  add(message: string) {
    // chamandoa a propriedade message que esta vazia 
    this.message = message;

    // chamando a função setTimeout. Esta função é usada para agendar a execução de uma função após um determinado intervalo de tempo.
    setTimeout(() => {

      // chamando o metodo de apagar menssagem
      this.clear();
    }, 4000);

    // adicione o metodo na pagina new moment va para o componente new-moment.component.ts
  }

  // apagando menssagem
  clear() {
    this.message = '';
  }
}
