import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Moment } from 'src/app/interface/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  // nome dado ao botão!
  btnText = 'Compartilhar!';

  constructor(private momentService: MomentService) {}

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

    // chamando o metodo createMoment do service
    await this.momentService.createMoment(formData).subscribe();
  }

}
