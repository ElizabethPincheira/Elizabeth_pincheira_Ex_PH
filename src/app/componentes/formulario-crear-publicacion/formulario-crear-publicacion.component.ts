import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { cameraOutline } from 'ionicons/icons'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-formulario-crear-publicacion',
  templateUrl: './formulario-crear-publicacion.component.html',
  styleUrls: ['./formulario-crear-publicacion.component.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonButton, IonIcon, IonThumbnail, FormsModule, CommonModule]
})
export class FormularioCrearPublicacionComponent implements OnInit {


  @Output() onCreate = new EventEmitter<{ titulo: string, descripcion: string }>();


  nuevapublicacion: Publicacion = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: ''
  };

  mensajeTituloPublicacion: boolean = false
  mensajeDescripcionPublicacion: boolean = false


  constructor() {
    addIcons({ cameraOutline });
  }

  ngOnInit() { }


  agregar() {
    //VALIDACIONES
    // Reinicia los mensajes de error antes de validar

    this.mensajeTituloPublicacion = false
    this.mensajeDescripcionPublicacion = false

    if (this.nuevapublicacion.titulo.length < 5) {
      console.log("El título debe tener al menos 5 caracteres");
      this.mensajeTituloPublicacion = true;
    }

    if (this.nuevapublicacion.descripcion.length < 20) {
      console.log("La descripción debe tener al menos 20 caracteres");
      this.mensajeDescripcionPublicacion = true;
    }

    // Solo emite el evento si no hay errores
    if (!this.mensajeTituloPublicacion && !this.mensajeDescripcionPublicacion) {
      this.onCreate.emit({ titulo: this.nuevapublicacion.titulo, descripcion: this.nuevapublicacion.descripcion });
      this.nuevapublicacion.titulo = '';
      this.nuevapublicacion.descripcion = '';
    }
  }

}