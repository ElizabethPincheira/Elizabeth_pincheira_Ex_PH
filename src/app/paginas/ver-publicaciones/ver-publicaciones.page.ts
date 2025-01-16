import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { TituloVerPublicacionComponent } from 'src/app/componentes/titulo-ver-publicacion/titulo-ver-publicacion.component';
import { ButtonAddComponent } from 'src/app/componentes/button-add-ver-publicacion/button-add.component'
import { PublicacionService } from 'src/app/servicios/publicacion.service'
import { PadreComponent } from 'src/app/componentes/padre/padre.component'




@Component({
  selector: 'app-ver-publicaciones',
  templateUrl: './ver-publicaciones.page.html',
  styleUrls: ['./ver-publicaciones.page.scss'],
  standalone: true,
  imports: [   TituloVerPublicacionComponent, IonContent, CommonModule, FormsModule,
   ButtonAddComponent,  PadreComponent]
})
export class VerPublicacionesPage implements OnInit {

  constructor(private publicacionService:PublicacionService ) { 




    
  }




  ngOnInit() {
  }



}

