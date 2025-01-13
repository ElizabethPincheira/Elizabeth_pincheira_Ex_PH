import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { cameraOutline} from 'ionicons/icons'

@Component({
  selector: 'app-formulario-crear-publicacion',
  templateUrl: './formulario-crear-publicacion.component.html',
  styleUrls: ['./formulario-crear-publicacion.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonThumbnail]
})
export class FormularioCrearPublicacionComponent  implements OnInit {

  constructor() { 
    addIcons({cameraOutline});
  }

  ngOnInit() {}

}
