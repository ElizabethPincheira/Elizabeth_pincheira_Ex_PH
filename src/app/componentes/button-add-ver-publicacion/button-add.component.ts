import { Component, OnInit } from '@angular/core';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, RouterModule]
})
export class ButtonAddComponent  implements OnInit {

  constructor() { 
    addIcons({add});
  }

  ngOnInit() {}

}
