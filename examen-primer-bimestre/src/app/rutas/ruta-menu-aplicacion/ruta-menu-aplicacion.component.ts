import { Component, OnInit, Input } from '@angular/core';
import {Aplicacion} from 'src/app/modelo/aplicacion'
import { BaseDeDatosService } from 'src/app/servicios/datos/base-de-datos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-menu-aplicacion',
  templateUrl: './ruta-menu-aplicacion.component.html',
  styleUrls: ['./ruta-menu-aplicacion.component.css']
})
export class RutaMenuAplicacionComponent implements OnInit {

  
  listaAplicaciones:Aplicacion[]=[];

  inputNombre:string='';
  inputVersion:number;
  inputFecha:any=new Date();
  inputURL:string='';
  inputPesoGB:number;
  inputCosto:number;
  busqueda:string='';
  sistemaOperativo:string='';
  idSistemaOperativo:number;
  constructor(private readonly baseDeDatos:BaseDeDatosService, private modalService:NgbModal,private route: ActivatedRoute) { }

  ngOnInit() {
    this.baseDeDatos.iniciarServicio();
    this.sistemaOperativo=this.route.snapshot.paramMap.get('nombre');
    this.idSistemaOperativo=parseInt(this.route.snapshot.paramMap.get('id'));
    this.listaAplicaciones=this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
    
  }
  
  open(content) {
    this.modalService.open(content);
  }

  guardarApp(){
    var fechaLanzamiento:Date=new Date();
    fechaLanzamiento.setFullYear(this.inputFecha['year'],this.inputFecha['month'],this.inputFecha['day'])
    const nuevaApp:Aplicacion={
      nombre:this.inputNombre,
      version:this.inputVersion,
      url:this.inputURL,
      fecha:fechaLanzamiento,      
      peso_gb:this.inputPesoGB,
      costo:this.inputCosto,
      sistemaOperativoId:this.idSistemaOperativo,
      id:Date.now()

    }
    this.baseDeDatos.agregarAplicacion(nuevaApp);
    this.listaAplicaciones=this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
    this.limpiarDatos();
    this.modalService.dismissAll();
  }

  eliminarAplicacion(id:number){
    this.baseDeDatos.eliminarAplicacion(id);
    this.listaAplicaciones=this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
  }


  limpiarDatos(){
  this.inputNombre='';
  this.inputVersion=0;
  this.inputFecha=new Date();
  this.inputURL='';
  this.inputPesoGB=0;
  this.inputCosto=0;
  }

  cerrarModal(){
    this.modalService.dismissAll();

  }

  buscarApp(){
    this.listaAplicaciones=this.baseDeDatos.buscarAplicacion(this.busqueda,this.idSistemaOperativo);
  }

}
