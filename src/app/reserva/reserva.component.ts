///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import { Estacionamento } from '../estacionamento.model';
import { EstacionamentoService } from '../estacionamento.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  @Input()
  estacionamento: Estacionamento;

  constructor(private estacionamentoService: EstacionamentoService, private sanatizer: DomSanitizer) { }

  ngOnInit() {
    this.estacionamentoService.estacioanmento()
      .subscribe(estacionamento => this.estacionamento = estacionamento);
  }

  url(image) {
    console.log(image);
    return this.sanatizer.bypassSecurityTrustResourceUrl(image);
  }
}
