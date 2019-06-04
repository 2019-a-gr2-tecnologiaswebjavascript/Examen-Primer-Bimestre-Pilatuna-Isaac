import { Component, OnInit } from '@angular/core';
import { SistemaOperativo } from 'src/app/modelo/sistema-operativo';
import { BaseDeDatosService } from 'src/app/servicios/datos/base-de-datos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-ruta-menu-sistema-operativo',
  templateUrl: './ruta-menu-sistema-operativo.component.html',
  styleUrls: ['./ruta-menu-sistema-operativo.component.css']
})
export class RutaMenuSistemaOperativoComponent implements OnInit {

  listaSistemas:SistemaOperativo[]=[];

  inputNombre:string='';
  inputVersion:number;
  inputFecha:any=new Date();
  inputPesoGB:number;
  inputInstalado:boolean=true;
  busqueda:string='';

  constructor(private readonly baseDeDatos:BaseDeDatosService, 
    private modalService:NgbModal, 
    private router:Router
    ) { }

  ngOnInit() {
    this.baseDeDatos.iniciarServicio();
    this.listaSistemas=this.baseDeDatos.obtenerListaSistemas();
  }
  
  open(content) {
    this.modalService.open(content);
  }

  guardarSistema(){
    var fechaLanzamiento:Date=new Date();
    fechaLanzamiento.setFullYear(this.inputFecha['year'],this.inputFecha['month'],this.inputFecha['day'])
    const nuevoSistema:SistemaOperativo={
      nombre:this.inputNombre,
      version:this.inputVersion,
      fecha:fechaLanzamiento,      
      peso_gb:this.inputPesoGB,
      instalado:this.inputInstalado,
      id:Date.now()

    }
    this.listaSistemas=this.baseDeDatos.agregarSistema(nuevoSistema);
    this.limpiarDatos();
    this.modalService.dismissAll();
  }

  eliminarSistema(id:number){
    this.listaSistemas=this.baseDeDatos.eliminarSistema(id);
  }


  limpiarDatos(){
  this.inputNombre='';
  this.inputVersion=0;
  this.inputFecha=new Date();
  this.inputPesoGB=0;
  this.inputInstalado=true;
  }

  cerrarModal(){
    this.modalService.dismissAll();

  }

  buscarSistema(){
    this.listaSistemas=this.baseDeDatos.buscarSistema(this.busqueda);
  }

  verSistema(id:number,nombre:string){

    this.router.navigate(['/menu-aplicacion',{'id':id,'nombre':nombre}]);
  }
}
