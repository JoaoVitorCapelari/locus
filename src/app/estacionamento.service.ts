import { Injectable } from '@angular/core';
import { Estacionamento } from './estacionamento.model';
import { ESTACIONAMENTO_API } from './app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EstacionamentoService {

  constructor(private http: HttpClient) { }
  estacioanmento(): Observable <Estacionamento> {
   return this.http.get<Estacionamento>(`${ESTACIONAMENTO_API}/estacionamento`);
  }
}
