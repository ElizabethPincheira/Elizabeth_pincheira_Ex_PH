import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { cameraOutline} from 'ionicons/icons'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-crear-publicacion',
  templateUrl: './formulario-crear-publicacion.component.html',
  styleUrls: ['./formulario-crear-publicacion.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonThumbnail, FormsModule]
})
export class FormularioCrearPublicacionComponent  implements OnInit {

  tituloPublicacion : string = '' ;
  descripcionPublicacion :string = '';

  constructor() { 
    addIcons({cameraOutline});
  }

  ngOnInit() {}

}
