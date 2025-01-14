import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar-crear-publicacion',
  templateUrl: './toolbar-crear-publicacion.component.html',
  styleUrls: ['./toolbar-crear-publicacion.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, RouterModule]
})
export class ToolbarCrearPublicacionComponent  implements OnInit {

  constructor() {
    addIcons({arrowBackOutline});
   }

  ngOnInit() {}

}
