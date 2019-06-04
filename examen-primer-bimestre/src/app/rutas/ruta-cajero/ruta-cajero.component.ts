import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DatosCajeroService } from 'src/app/servicios/servicios-cajero/datos-cajero.service';

@Component({
  selector: 'app-ruta-cajero',
  templateUrl: './ruta-cajero.component.html',
  styleUrls: ['./ruta-cajero.component.css']
})
export class RutaCajeroComponent implements OnInit {
  nombreCajero:string;
  constructor(private router:Router, private readonly datosCajeroService:DatosCajeroService) { }

  ngOnInit() {
    this.nombreCajero=this.datosCajeroService.obtenerNombreCajero();
    console.log(this.nombreCajero);
  }

  guardarCajero(formularioCajero){
    let nombreCajero:string=formularioCajero.controls.nombreCajero.value;
    this.datosCajeroService.guardarNombreCajero(nombreCajero);
    this.router.navigateByUrl("/main-menu");
  }


}
