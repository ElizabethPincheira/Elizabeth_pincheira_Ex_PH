import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonItem, IonLabel, IonList, IonThumbnail, IonIcon,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cardlist-ver-publicacion',
  templateUrl: './cardlist-ver-publicacion.component.html',
  styleUrls: ['./cardlist-ver-publicacion.component.scss'],
  standalone: true,
  imports: [ IonCard, IonCardContent, IonItem, IonLabel, IonList, IonThumbnail, IonIcon]
})
export class CardlistVerPublicacionComponent  implements OnInit {

  constructor() { 
    addIcons({trashOutline})
  }

  ngOnInit() {}

}
