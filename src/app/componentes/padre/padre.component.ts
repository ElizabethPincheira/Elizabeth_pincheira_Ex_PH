import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CardlistVerPublicacionComponent } from 'src/app/componentes/cardlist-ver-publicacion/cardlist-ver-publicacion.component';
import { FormularioCrearPublicacionComponent } from 'src/app/componentes/formulario-crear-publicacion/formulario-crear-publicacion.component';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  standalone: true,
  imports: [CardlistVerPublicacionComponent, FormularioCrearPublicacionComponent, CommonModule]
})
export class PadreComponent implements OnInit {
  listaPublicaciones: Publicacion[] = [];

  @Input() mostrarFormulario: boolean = false;

  constructor(private publicacionService: PublicacionService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this._actualizar();
    console.log("Esta es la función ngOnInit _actualizar");
  }

  async deleteContacto(publicacion: Publicacion) {
    console.log("Botón elimina publicación: " + publicacion.titulo);
    await this.publicacionService.eliminar(publicacion);
    this._actualizar();  // Llamamos _actualizar para refrescar la lista
  }

  private async _actualizar() {
    this.listaPublicaciones = await this.publicacionService.getPublicacion();
    console.log("Lista de publicaciones actualizada:", this.listaPublicaciones);

    // Forzar la actualización de la vista en caso de que Angular no lo detecte
    this.cdRef.detectChanges();
  }

  onCreatePublicacion($event: { titulo: string, descripcion: string }) {
    const nuevapublicacion: Publicacion = {
      titulo: $event.titulo,
      descripcion: $event.descripcion,
      imagen: '',
      fecha: new Date().toISOString() 
    };

    // Usar el servicio para agregar la publicación
    this.publicacionService.agregarPublicacion(nuevapublicacion).then(() => {
      // Una vez que se agrega la publicación, actualizamos la lista
      this._actualizar();
      console.log("Nueva publicación creada:", nuevapublicacion);
    });
  }
}
