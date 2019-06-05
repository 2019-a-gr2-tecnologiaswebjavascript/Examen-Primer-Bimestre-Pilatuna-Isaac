import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-main-menu',
  templateUrl: './ruta-main-menu.component.html',
  styleUrls: ['./ruta-main-menu.component.css']
})
export class RutaMainMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  revisarCompras(){
    this.router.navigateByUrl("/revisar-compras");

  }
  administrarSistema(){
    this.router.navigateByUrl("/menu-sistema-operativo");

  }

  comprar(){
    this.router.navigateByUrl("/menu-comprar");

  }

}
