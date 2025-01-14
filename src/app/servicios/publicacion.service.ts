import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private _publicaciones:Publicacion[] = [
    new Publicacion("perrito encontrado","el perrito fue encontrado en ...")
    ,new Publicacion("gatito encontrado","el gatito fue encontrado en ...")
    ,new Publicacion("pajarito encontrado","el pajarito fue encontrado en ...")
  ]

  constructor() { }

  agregarPublicacion(p:Publicacion) {
    this._publicaciones.push(p)
  }

  getPublicacion():Publicacion[] {
    return this._publicaciones
  }

}
