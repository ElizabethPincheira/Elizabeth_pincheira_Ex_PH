import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ToolbarCrearPublicacionComponent } from 'src/app/componentes/toolbar-crear-publicacion/toolbar-crear-publicacion.component'
import { PadreComponent } from 'src/app/componentes/padre/padre.component'


@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
  standalone: true,
  imports: [IonContent, ToolbarCrearPublicacionComponent,PadreComponent, CommonModule, FormsModule ]
})
export class CrearPublicacionPage implements OnInit {



  constructor() {} 

  ngOnInit() {
  }

}
