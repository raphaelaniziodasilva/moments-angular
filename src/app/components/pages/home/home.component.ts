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

  // no arquivo moment.service.ts crie o método para pegar todos os momentos que esta no banco de dados

  // para pegar todos os momentos que estão salvos no db
  allMoments: Moment[] = [];
  // para fazer o filtro dos momentos no html que vai ser exibido, e depois vamos filtrar com o que o usuário esta buscando
  moments: Moment[] = [];
  // para ter acesso a api de back-end para fazer a busca dos dados momentos
  baseApiUrl = environment.baseApiUrl

  // definindo o icone de busca
  faSearch = faSearch;
  // o que o usuário vai buscar
  searchTerm: string = '';

  constructor(private momentService: MomentService) {}

  // vamos fazer a inicialização dos momentos, buscando la do service
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

  // busca pelo que o usuário digitar
  search(e: Event): void {
    // pegando o valor que esta sendo exibido pelo input do html, ou seja o valor que está sendo digitado pelo usuário
    const target = e.target as HTMLInputElement;
    const value = target.value;

    // os momentos que esta sendo exibido vai receber o filtro todos os momentos filtrados
    this.moments = this.allMoments.filter((moment) => {
      // toLowerCase() =  ignorando letras maiúsculas e minúsculas
      return moment.title.toLowerCase().includes(value);
    })
  }
}
