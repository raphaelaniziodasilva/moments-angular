import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // a propriedade message vai começar vazia, vamos adicionar a messagem na exibição do compomonete 
  message: string = '';

  constructor() { }

  // adicionando messagem
  add(message: string) {
    // chamando a propriedade message que esta vazia 
    this.message = message;

    // chamando a função setTimeout. Esta função é usada para agendar a execução de uma função após um determinado intervalo de tempo.
    setTimeout(() => {

      // chamando o metodo de apagar menssagem
      this.clear();
    }, 4000); // duração de apagar menssagem em 4 segundos

    // no arquivo new-moment.component.ts adicione o metodo add(message: string) na pagina new moment e depois no arquivo messages.component.html faça uma verificação para adicionar a propriedade message
  }

  // apagando menssagem
  clear() {
    this.message = '';

    // no arquivo messages.component.html utilize o método clear() para permitir que o usuário possa fechar a menssagem apertando no X
  }
}
