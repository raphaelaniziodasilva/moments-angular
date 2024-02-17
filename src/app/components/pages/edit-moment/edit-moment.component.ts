import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/interface/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  // criando propriedade moment para usar no html
  moment!: Moment
  // atribuindo valor ao botão
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  // para editar o momento precisamos pegar o momento pelo ID
  ngOnInit(): void {
    // pegando o id que está na URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // pegando o momento pelo ID
    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    })
  }

  // no arquivo moment.service.ts crie o método para editar o momento no db

  async editHandler(momentData: Moment) {
    // obténdo o ID do momento
    const id = this.moment.id;

    // criando um novo objeto FormData que será usado para enviar os dados do momento a serem atualizados para o servidor
    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    // verificando se há uma imagem
    if(momentData.image) {
      formData.append('image', momentData.image);
    }

    // chamando o metodo de updateMoment
    await this.momentService.updateMoment(id!, formData).subscribe();

    // chamando o serviço de mensageria e adicionando a mensagem para o usuário
    this.messageService.add(`Moment ${id} foi atualizado com sucesso!`);

    // após o momento ser excluido vai redirecionar para a pagina principal a Home
    this.router.navigate(['/']);
  }

}
