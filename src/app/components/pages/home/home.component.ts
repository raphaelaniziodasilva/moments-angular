import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/interface/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // para pegar todos os momentos que estão salvos no db
  allMoments: Moment[] = [];
  // para fazer o filtro dos momentos no html que vai ser exibido depois da busca, vamos filtrar com o que o usuário esta buscando
  moments: Moment[] = [];
  // para ter acesso a api de back-end para fazer a busca dos momentos
  baseApiUrl = environment.baseApiUrl

  // no arquivo moment.service.ts crie o método para pegar todos os momentos que esta no banco de dados

  constructor(private momentService: MomentService) {}

  // aqui vamos fazer a inicialização dos momentos buscando la do service
  ngOnInit(): void {
    // vamos fazer a recepcão de dados
    this.momentService.getMoments().subscribe((items) => {
      // pegando os dados
      const data = items.data;

      // transformando a data para o formato do brasil
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
