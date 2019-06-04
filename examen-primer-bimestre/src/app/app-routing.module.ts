import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaCajeroComponent } from './rutas/ruta-cajero/ruta-cajero.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaMainMenuComponent } from './rutas/ruta-main-menu/ruta-main-menu.component';
import { RutaMenuSistemaOperativoComponent } from './rutas/ruta-menu-sistema-operativo/ruta-menu-sistema-operativo.component';
import { RutaMenuAplicacionComponent } from './rutas/ruta-menu-aplicacion/ruta-menu-aplicacion.component';
import { RutaMenuComprarComponent } from './rutas/ruta-menu-comprar/ruta-menu-comprar.component';
import { RutaMenuRevisarComprasComponent } from './rutas/ruta-menu-revisar-compras/ruta-menu-revisar-compras.component';

const routes: Routes = [
  {
    path:'cajero/app',
    component: RutaCajeroComponent
  },
  {
    path: '',
    redirectTo: '/cajero/app',
    pathMatch: 'full'
  },
  {
    path:'revisar-compras',
    component:RutaMenuRevisarComprasComponent
  }
  ,
  {
    path:'menu-comprar',
    component:RutaMenuComprarComponent
  }
  ,
  {
    path:'main-menu',
    component: RutaMainMenuComponent
  },
  {
    path:'menu-sistema-operativo',
    component:RutaMenuSistemaOperativoComponent
  },
  {
    path:'menu-aplicacion',
    component:RutaMenuAplicacionComponent
  }

  ,
  {path: '**',
    component: RutaNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
