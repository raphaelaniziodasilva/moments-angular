import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  // configurando o caminho específico para rota da API
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  // injetando o serviço HttpClient, isso permite que o serviço utilize a funcionalidade de solicitações HTTP para interagir com uma API externa
  constructor(private http: HttpClient) { }

  // enviando uma solicitação POST para a API usando o HttpClient, enviando os dados do formulário fornecidos como FormData, e retorna um Observable que pode ser assinado para observar a resposta da solicitação.
  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)

    // va para o arquivo new-moment.component.ts e chame o metodo asincrono createMoment
  }
}
