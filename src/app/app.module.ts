import { GaleriaProduktowaComponent } from './galeria/galeria-produktowa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { GaleriaMacroComponent } from './galeria/galeria-macro.component';
import { OMnieComponent } from './o-mnie/o-mnie.component';
import { StartComponent } from './start/start.component';
import { PhotoComponent } from './photo/photo.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { GaleriaKrajobrazyComponent } from './galeria/galeria-krajobrazy.component';
import { GaleriaLudzieComponent } from './galeria/galeria-ludzie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    GaleriaMacroComponent,
    GaleriaProduktowaComponent,
    GaleriaKrajobrazyComponent,
    GaleriaLudzieComponent,
    OMnieComponent,
    StartComponent,
    PhotoComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
