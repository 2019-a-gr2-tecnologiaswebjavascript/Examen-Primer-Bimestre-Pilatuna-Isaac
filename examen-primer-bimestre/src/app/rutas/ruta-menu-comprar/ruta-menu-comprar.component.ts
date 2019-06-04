import { Component, OnInit } from '@angular/core';
import { DatosCajeroService } from 'src/app/servicios/servicios-cajero/datos-cajero.service';
import { BaseDeDatosService } from 'src/app/servicios/datos/base-de-datos.service';
import { Aplicacion } from 'src/app/modelo/aplicacion';
import { ItemCarrito } from 'src/app/modelo/item-carrito';
import { ItemCompra } from 'src/app/modelo/item-compra';
import { ServicioCarritoService } from 'src/app/servicios/servicio-carrito/servicio-carrito.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ruta-menu-comprar',
  templateUrl: './ruta-menu-comprar.component.html',
  styleUrls: ['./ruta-menu-comprar.component.css']
})
export class RutaMenuComprarComponent implements OnInit {

  listaAplicaciones:Aplicacion[]=[];
  carrito:ItemCarrito[]=[];

  nombre:string='';
  identificacion:string='';
  direccion:string='';
  telefono:string='';
  correo:string='';


  constructor(private readonly baseDeDatos:BaseDeDatosService, 
    private readonly datosCajero:DatosCajeroService,
    private readonly servicioCarrito:ServicioCarritoService,
    alertConfig:NgbAlertConfig) { 
      // customize default values of alerts used by this component tree
    
    }
  total=0;
  nombreCajero='';

  ngOnInit() {
    this.nombreCajero=this.datosCajero.obtenerNombreCajero();
    this.baseDeDatos.iniciarServicio();
    this.listaAplicaciones=this.baseDeDatos.obtenerTodasLasAplicaciones();
  }
  agregarAplicacion(nombre:string,version:number,costo:number,id:number){
    const index=this.buscarEnCarrito(id);
    if(index==-1){
      this.agregarNuevoItem(nombre,version,costo,id);
    }else{
      this.sumarUnoAlItem(index,costo);
    }

  }

  sumarUnoAlItem(index:number,costo:number){
    var itemCarrito=this.carrito[index];
    itemCarrito.cantidad+=1;
    itemCarrito.costoTotal+=costo;
    itemCarrito.costoTotal=parseFloat(itemCarrito.costoTotal.toFixed(2));
    this.carrito[index]=itemCarrito;
    this.total+=costo;
    this.total=parseFloat(this.total.toFixed(2));
  }

  agregarNuevoItem(nombreInput:string,versionInput:number,costoInput:number,idInput:number){
    const itemCarrito:ItemCarrito={
      nombre:nombreInput,
      version:versionInput,
      costo:costoInput,
      cantidad:1,
      costoTotal:costoInput,
      id:idInput
    }
    this.carrito.push(itemCarrito);
    this.total=this.total+costoInput;
    this.total=parseFloat(this.total.toFixed(2));
  }

  buscarEnCarrito(id:number):number{
    var indice=-1;
    this.carrito.forEach(
      function(item,index,array){
        if(item.id==id){
          indice=index;
        }
      }
    );
    return indice;
  }

  eliminarAplicacion(id:number,costo:number){
    const index=this.buscarEnCarrito(id);
    if(index!=-1){
      this.restarUnoAlItem(index,costo);
    }
  }
  restarUnoAlItem(index:number,costo:number){
    var itemCarrito=this.carrito[index];
    itemCarrito.cantidad-=1;
    itemCarrito.costoTotal-=costo;
    itemCarrito.costoTotal=parseFloat(itemCarrito.costoTotal.toFixed(2));
    this.carrito[index]=itemCarrito;
    this.total-=costo;
    this.total=parseFloat(this.total.toFixed(2));
    if(itemCarrito.cantidad==0){
      this.carrito.splice(index,1);
    }
  }

  finalizarCompra(){
    const itemCompra:ItemCompra={
      nombreComprador:this.nombre,
      nombreCajero:this.nombreCajero,
      identificacion:this.identificacion,
      direccion:this.direccion,
      telefono:this.telefono,
      correo:this.correo,
      carrito:this.carrito,
      total:this.total

    }
    this.servicioCarrito.agregarVenta(itemCompra);
    this.total=0;
    this.carrito=[];
  
    alert('COMPRA SATISFACTORIA');
  }

}
