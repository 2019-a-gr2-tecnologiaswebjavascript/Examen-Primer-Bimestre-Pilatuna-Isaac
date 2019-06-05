import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RutaCajeroComponent } from './rutas/ruta-cajero/ruta-cajero.component';
import { RutaMainMenuComponent } from './rutas/ruta-main-menu/ruta-main-menu.component';
import { RutaMenuSistemaOperativoComponent } from './rutas/ruta-menu-sistema-operativo/ruta-menu-sistema-operativo.component';
import { RutaMenuComprarComponent } from './rutas/ruta-menu-comprar/ruta-menu-comprar.component';
import { RutaMenuRevisarComprasComponent } from './rutas/ruta-menu-revisar-compras/ruta-menu-revisar-compras.component';
import { RutaMenuAplicacionComponent } from './rutas/ruta-menu-aplicacion/ruta-menu-aplicacion.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RutaCajeroComponent,
    RutaMainMenuComponent,
    RutaMenuSistemaOperativoComponent,
    RutaMenuComprarComponent,
    RutaMenuRevisarComprasComponent,
    RutaMenuAplicacionComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
