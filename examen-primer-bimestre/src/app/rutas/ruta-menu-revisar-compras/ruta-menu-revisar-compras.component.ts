import { Component, OnInit } from '@angular/core';
import { ItemCompra } from 'src/app/modelo/item-compra';
import { ServicioCarritoService } from 'src/app/servicios/servicio-carrito/servicio-carrito.service';

@Component({
  selector: 'app-ruta-menu-revisar-compras',
  templateUrl: './ruta-menu-revisar-compras.component.html',
  styleUrls: ['./ruta-menu-revisar-compras.component.css']
})
export class RutaMenuRevisarComprasComponent implements OnInit {

  constructor(private readonly servicioCarrito:ServicioCarritoService) { }
  listaFacturas:ItemCompra[]=[];
  busqueda:string='';
  ngOnInit() {
    this.listaFacturas=this.servicioCarrito.obtenerFacturas();
  }

  buscarFactura(){
    this.listaFacturas=this.servicioCarrito.buscarFacturas(this.busqueda);
  }

}
