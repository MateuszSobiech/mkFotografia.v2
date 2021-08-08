import { GaleriaProduktowaComponent } from './galeria/galeria-produktowa.component';
import { GaleriaSesjaComponent } from './galeria/galeria-sesja.component';
import { GaleriaMakroComponent } from './galeria/galeria-makro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'g-makro', component: GaleriaMakroComponent },
  { path: 'g-produktowa', component: GaleriaProduktowaComponent },
  { path: 'g-sesja', component: GaleriaSesjaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
