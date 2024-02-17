import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interface/Response';
import { Moment } from '../interface/Moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  // configurando o caminho específico para rota da API back-end
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  // injetando o serviço HttpClient, isso permite que o serviço utilize a funcionalidade de solicitações HTTP para interagir com uma API externa
  constructor(private http: HttpClient) { }

  // pegando todos os momentos que estão salvos no db, em vez de usar Observable<Moment[]> vamos usar o Observable<Response<Moment[]>> 
  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);

    // va para o arquivo home.component.ts e chame o metodo getMoments
  }

  // pegando um momento pelo id que esta no db
  getMoment(id: number): Observable<Response<Moment>> {
    // criando uma nova url para pegar o id
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);

    // va para o arquivo moment.component.ts e chame o metodo getMoment
  }

  // enviando uma solicitação POST para a API usando o HttpClient, enviando os dados do formulário fornecidos como FormData, e retorna um Observable que pode ser assinado para observar a resposta da solicitação.
  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);

    // va para o arquivo new-moment.component.ts e chame o createMoment
  }

  // excluindo um momento pelo id no db
  removeMoment(id: number) {
    // criando uma nova url para pegar o id
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

    // va para o arquivo moment.component.ts e chame o metodo removeMoment
  }

  // editar momento pelo id no db
  updateMoment(id: number, formData: FormData): Observable<FormData> {
    // criando uma nova url para pegar o id
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);

    // va para o arquivo edit-moment.component.ts e chame o metodo editMoment
  }
}
