import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interface/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  // nome dado ao botão!
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService, 
    private messageService: MessageService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  // criando evento para receber as informações do formulário que esta vindo componente filho moment-form.component.ts
  async createHandler(moment: Moment){
    // cria uma nova instância do objeto FormData, que é uma interface fornecida pelo navegador para construir facilmente dados de formulário a serem enviados em uma solicitação HTTP, particularmente em requisições do tipo POST
    const formData = new FormData();

    // vamos preecher com os dados que precisamos
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    // validando se o moment possue uma imagem
    if(moment.image) {
      formData.append('image', moment.image);
    }
    
    // agora precisamos enviar os dados para o service, va para o arquivo moment.service.ts

    // chamando o metodo createMoment do service para criar o momento e salvar no db
    await this.momentService.createMoment(formData).subscribe();

    /* Quando o moment for criado: adicionado no banco de dados, precisamos adicionar uma menssagem informando ao usuario que foi criado com sucesso

    para isso precisamos criar o componente de menssagem e configura-lo:
      ng generate component components/messages
      adicionando os icones no angular:
      ng add @fortawesome/angular-fontawesome

      vá para o componente messages no arquivo messages.component.html e crie o template de mensagem
    */

    // chamando o metodo de criar menssagem
    this.messageService.add('Momento adicionado com sucesso!');

    // vamos redirecionar para a pagina principal
    this.router.navigate(['/']);
  }
}
