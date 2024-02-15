import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // pegando o id que está na URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // no arquivo moment.service.ts crie o método para pegar um momentos pelo id no db

    // vamos fazer o carregamento dos dados e atribuir no moment
    this.momentService.getMoment(id)
    .subscribe((item) => (this.moment = item.data))


  }


}
