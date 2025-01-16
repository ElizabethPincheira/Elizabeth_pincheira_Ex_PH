import { Component, OnInit } from '@angular/core';
import { CardlistVerPublicacionComponent } from 'src/app/componentes/cardlist-ver-publicacion/cardlist-ver-publicacion.component'
import { FormularioCrearPublicacionComponent } from 'src/app/componentes/formulario-crear-publicacion/formulario-crear-publicacion.component'
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  standalone:true,
  imports:[CardlistVerPublicacionComponent,FormularioCrearPublicacionComponent]
})
export class PadreComponent  implements OnInit {

  constructor(private publicacionService:PublicacionService) { }

    listaPublicaciones:Publicacion[] = []

  ngOnInit() {
    this._actualizar()
  }

  private _actualizar(){
    this.listaPublicaciones = this.publicacionService.getPublicacion()
  }

  onCreatePublicacion($event: {titulo: string, descripcion: string}) {
    const nuevapublicacion = new Publicacion($event.titulo, $event.descripcion);
    this.publicacionService.agregarPublicacion(nuevapublicacion);
    this._actualizar();
  }
}



