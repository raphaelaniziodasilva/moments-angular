import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/interface/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  // para ter acesso a api de back-end para fazer a busca dos dados momentos
  baseApiUrl = environment.baseApiUrl

  // icones de editar e excluir
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessageService, 
    private router: Router
  ) {}

  // para pegar um momento especifico precisamos pegar o momento pelo ID
  ngOnInit(): void {
    // pegando o id que está na URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // no arquivo moment.service.ts crie o método para pegar um momentos pelo id no db

    // vamos fazer o carregamento dos dados e atribuir no moment
    this.momentService.getMoment(id)
    .subscribe((item) => (this.moment = item.data))
  }

  // no arquivo moment.service.ts crie o método para excluir um momento no db

  // excluindo momento pelo id
  async removeHandler(id: number) {
    // chamando o metodo removeMomend 
    await this.momentService.removeMoment(id).subscribe();

    // chamando o serviço de mensageria e adicionando a mensagem para o usuário
    this.messageService.add('Momento excluído com sucesso!');

    // após o momento ser excluido vai redirecionar para a pagina principal a Home
    this.router.navigate(['/']);
  }

}
