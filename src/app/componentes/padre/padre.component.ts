import { Component, OnInit, Input } from '@angular/core';
import { CardlistVerPublicacionComponent } from 'src/app/componentes/cardlist-ver-publicacion/cardlist-ver-publicacion.component'
import { FormularioCrearPublicacionComponent } from 'src/app/componentes/formulario-crear-publicacion/formulario-crear-publicacion.component'
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  standalone: true,
  imports: [CardlistVerPublicacionComponent, FormularioCrearPublicacionComponent, CommonModule]
})
export class PadreComponent implements OnInit {

  constructor(private publicacionService: PublicacionService) { }

  deleteContacto(publicacion: Publicacion) {
    console.log("boton elimina publicación" + publicacion.titulo)

  }


  @Input() mostrarFormulario: boolean = false;



  listaPublicaciones: Publicacion[] = []

  ngOnInit() {
    this._actualizar()
    console.log("esta es la funcion  ngOnInit _actualizar")

  }

  private async _actualizar() {
    this.listaPublicaciones = await this.publicacionService.getPublicacion();
    console.log("esta es la funcion private async _actualizar()")

  }


  onCreatePublicacion($event: { titulo: string, descripcion: string }) {
    const nuevapublicacion: Publicacion = {
      titulo: $event.titulo,
      descripcion: $event.descripcion,
      imagen: '' // Asumiendo que 'imagen' es obligatorio, puedes dejarlo vacío o asignarle un valor.
  };
  

    // Usar el servicio para agregar la publicación
    this.publicacionService.agregarPublicacion(nuevapublicacion).then(() => {
    // Una vez que se agrega la publicación, actualizamos la lista
    this._actualizar();

    console.log("esta es la funcion onCreatePublicacion !!!!", nuevapublicacion)});
  }
}



// onCreatePublicacion($event: { titulo: string, descripcion: string }) {
//   const nuevapublicacion = new Publicacion($event.titulo, $event.descripcion);

//   // Usar el servicio para agregar la publicación
//   this.publicacionService.agregarPublicacion(nuevapublicacion).then(() => {
//     // Una vez que se agrega la publicación, actualizamos la lista
//     this._actualizar();
//   });
// }


