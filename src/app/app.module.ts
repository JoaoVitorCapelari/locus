import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarBlackComponent } from './navbar-black/navbar-black.component';
import { EstacionamentoService } from './estacionamento.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    SobreComponent,
    ReservaComponent,
    ParceirosComponent,
    FaqComponent,
    HomeComponent,
    NavbarBlackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EstacionamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
