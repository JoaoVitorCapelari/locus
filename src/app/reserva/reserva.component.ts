///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import { Estacionamento } from '../estacionamento.model';
import { EstacionamentoService } from '../estacionamento.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  @Input()
  estacionamento: Estacionamento;

  constructor(private estacionamentoService: EstacionamentoService) { }

  ngOnInit() {
    this.estacionamentoService.estacioanmento()
      .subscribe(estacionamento => this.estacionamento = estacionamento);
  }

}
