import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-titulo-ver-publicacion',
  templateUrl: './titulo-ver-publicacion.component.html',
  styleUrls: ['./titulo-ver-publicacion.component.scss'],
  standalone: true,
  imports:[IonHeader, IonTitle, IonToolbar]
})
export class TituloVerPublicacionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
