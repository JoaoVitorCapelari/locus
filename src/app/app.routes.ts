import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SobreComponent} from './sobre/sobre.component';
import {FaqComponent} from './faq/faq.component';
import {ParceirosComponent} from './parceiros/parceiros.component';
import {ReservaComponent} from './reserva/reserva.component';
import {HomeComponent} from './home/home.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'reserva', component: ReservaComponent}
];

