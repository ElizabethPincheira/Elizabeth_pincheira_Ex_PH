import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { TituloVerPublicacionComponent } from 'src/app/componentes/titulo-ver-publicacion/titulo-ver-publicacion.component';
import { CardlistVerPublicacionComponent } from 'src/app/componentes/cardlist-ver-publicacion/cardlist-ver-publicacion.component'

@Component({
  selector: 'app-ver-publicaciones',
  templateUrl: './ver-publicaciones.page.html',
  styleUrls: ['./ver-publicaciones.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, TituloVerPublicacionComponent, IonContent, CardlistVerPublicacionComponent ]
})
export class VerPublicacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
