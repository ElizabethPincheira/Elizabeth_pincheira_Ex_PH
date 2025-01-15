import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonThumbnail, IonIcon, IonImg} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service'

@Component({
  selector: 'app-cardlist-ver-publicacion',
  templateUrl: './cardlist-ver-publicacion.component.html',
  styleUrls: ['./cardlist-ver-publicacion.component.scss'],
  standalone: true,
  imports: [ IonItem, IonLabel, IonList, IonThumbnail, IonIcon, CommonModule, IonImg]
})
export class CardlistVerPublicacionComponent  implements OnInit {



  // @Input() publicacion:Publicacion[] = []

  constructor(private publicacionService:PublicacionService) { 
    addIcons({trashOutline});
  }

  publicaciones:Publicacion[] = []

  ngOnInit(): void {
    this.publicaciones = this.publicacionService.getPublicacion()
  }

}
