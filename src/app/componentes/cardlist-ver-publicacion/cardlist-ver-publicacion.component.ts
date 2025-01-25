import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IonItem, IonLabel, IonList, IonThumbnail, IonIcon, IonImg, IonButton, IonModal, IonHeader, IonTitle, IonButtons  } from '@ionic/angular/standalone';
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
  imports: [IonItem, IonLabel, IonList, IonThumbnail, IonIcon, CommonModule, IonImg, IonButton, IonModal, IonHeader, IonTitle, IonButtons]
})
export class CardlistVerPublicacionComponent implements OnInit {

  isModalPriceOpen:boolean = false;
  //-----
  agenda: Publicacion[] = []


  @Input() publicacion: Publicacion[] = []
  @Output() onDelete = new EventEmitter<Publicacion>()

  constructor(private publicacionService: PublicacionService) {
    addIcons({ trashOutline });
  }


  publicaciones: Publicacion[] = []

  ngOnInit(): void {
    // Llamamos a cargarInicial para cargar las publicaciones al iniciar el componente
    this.cargarInicial();
  }



  //ELIMINAR PUBLICACION
  async clickEliminar(p: Publicacion) {
    this.onDelete.emit(p)
    this.agenda = await this.publicacionService.getPublicacion();
    this.setModalPriceOpen(true)
  }



  async cargarInicial() {
    this.agenda = await this.publicacionService.getPublicacion();
    console.log('Publicaciones cargadas:', this.agenda);
  }

  setModalPriceOpen(abierto:boolean) {
    this.isModalPriceOpen = abierto
  }




}


