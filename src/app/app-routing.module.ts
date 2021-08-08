import { KontaktComponent } from './kontakt/kontakt.component';
import { StartComponent } from './start/start.component';
import { OMnieComponent } from './o-mnie/o-mnie.component';
import { GaleriaProduktowaComponent } from './galeria/galeria-produktowa.component';
import { GaleriaSesjaComponent } from './galeria/galeria-sesja.component';
import { GaleriaMakroComponent } from './galeria/galeria-makro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'o-mnie', component: OMnieComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'g-makro', component: GaleriaMakroComponent },
  { path: 'g-produktowa', component: GaleriaProduktowaComponent },
  { path: 'g-sesja', component: GaleriaSesjaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
