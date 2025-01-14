import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { TituloVerPublicacionComponent } from 'src/app/componentes/titulo-ver-publicacion/titulo-ver-publicacion.component';
import { CardlistVerPublicacionComponent } from 'src/app/componentes/cardlist-ver-publicacion/cardlist-ver-publicacion.component'
import { ButtonAddComponent } from 'src/app/componentes/button-add-ver-publicacion/button-add.component'
import { RouterModule } from '@angular/router';
import { PublicacionService } from 'src/app/servicios/publicacion.service'
import { Publicacion } from 'src/app/modelo/publicacion';


@Component({
  selector: 'app-ver-publicaciones',
  templateUrl: './ver-publicaciones.page.html',
  styleUrls: ['./ver-publicaciones.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, TituloVerPublicacionComponent, IonContent, 
    CardlistVerPublicacionComponent,ButtonAddComponent, RouterModule ]
})
export class VerPublicacionesPage implements OnInit {

  constructor(private publicacionService:PublicacionService ) { }

  publicaciones:Publicacion[] = []

  ngOnInit(): void {
    this.publicaciones = this.publicacionService.getPublicacion()
  }

}
