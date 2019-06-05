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
  inputTipoBusqueda:boolean=true;
  flag:boolean=true;
  ngOnInit() {
    this.servicioCarrito.iniciarServicio();
    this.listaFacturas=this.servicioCarrito.obtenerFacturas();
  }

  buscarPorCajero(){
    this.flag=false;
  }

  buscarPorCliente(){
    this.flag=true;
  }

  buscarFactura(){
    if(this.flag===true){
      this.listaFacturas=this.servicioCarrito.buscarFacturas(this.busqueda);
      console.log('Buscar CLiente')

    }else{
      this.listaFacturas=this.servicioCarrito.buscarFacturasPorCajero(this.busqueda);
      console.log('Buscar cajero');
    }
  }

}
