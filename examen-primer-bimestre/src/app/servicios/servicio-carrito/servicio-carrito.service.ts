import { Injectable } from '@angular/core';
import { ItemCompra } from 'src/app/modelo/item-compra';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  totalVentas = [];
  constructor() { }

  agregarVenta(itemCompra:ItemCompra){
    
    console.log('ENTRA')
    this.totalVentas.push(itemCompra);
    console.log(this.totalVentas)

  }
}
