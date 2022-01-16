import { StartComponent } from './start/start.component';
import { OMnieComponent } from './o-mnie/o-mnie.component';
import { GaleriaProduktowaComponent } from './galeria/galeria-produktowa.component';
import { GaleriaMacroComponent } from './galeria/galeria-macro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { GaleriaKrajobrazyComponent } from './galeria/galeria-krajobrazy.component';
import { GaleriaLudzieComponent } from './galeria/galeria-ludzie.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'o-mnie', component: OMnieComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'g-makro', component: GaleriaMacroComponent },
  { path: 'g-produktowa', component: GaleriaProduktowaComponent },
  { path: 'g-krajobrazy', component: GaleriaKrajobrazyComponent },
  { path: 'g-ludzie', component: GaleriaLudzieComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
