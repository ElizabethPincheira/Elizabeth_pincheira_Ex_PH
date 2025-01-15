import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { cameraOutline} from 'ionicons/icons'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-crear-publicacion',
  templateUrl: './formulario-crear-publicacion.component.html',
  styleUrls: ['./formulario-crear-publicacion.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonThumbnail, FormsModule, CommonModule]
})
export class FormularioCrearPublicacionComponent  implements OnInit {

  tituloPublicacion : string = '' ;
  descripcionPublicacion :string = '';

  // onCreate = new EventEmitter<{titulo:string;desccripcion:string}>()

// *********
//   @Output() onCreate = new EventEmitter<{frase:string;autor:string}>()
// *******


  constructor() { 
    addIcons({cameraOutline});
  }

  ngOnInit() {}

  guardarPublicacion(){
    // this.onCreate.emit({titulo:this.tituloPublicacion, descripcion:this.descripcionPublicacion})
    // this.tituloPublicacion= '';
    // this.descripcionPublicacion = '';
    console.log("se presiona boton GUARDAR")
  }

  agregar(){}

}
