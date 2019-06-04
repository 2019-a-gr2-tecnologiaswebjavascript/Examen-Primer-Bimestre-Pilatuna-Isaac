import { Injectable } from '@angular/core';
import { ItemCompra } from 'src/app/modelo/item-compra';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  totalVentas:ItemCompra[] = [];
  constructor() { }

  agregarVenta(itemCompra:ItemCompra){
    
    console.log('ENTRA')
    this.totalVentas.push(itemCompra);
    console.log(this.totalVentas)

  }

  obtenerFacturas():ItemCompra[]{
    return this.totalVentas;
  }

  buscarFacturas(nombre:string){
    var indices=[];
    this.totalVentas.forEach(
      function(item,index,array){
        if(item.nombreComprador.includes(nombre)){
          indices.push(index);
        }
      }
    );
    
    var listaSearch=indices.map(i => this.totalVentas[i]);
    return listaSearch;
  }
}
