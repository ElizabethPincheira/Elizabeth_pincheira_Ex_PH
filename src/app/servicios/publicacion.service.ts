import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

private clave = "AGENDA";


  // private _publicaciones:Publicacion[] = [
  //   new Publicacion("perrito encontrado","el perrito fue encontrado en ...")
  //   ,new Publicacion("gatito encontrado","el gatito fue encontrado en ...")
  //   ,new Publicacion("pajarito encontrado","el pajarito fue encontrado en ...")
  // ]

  constructor() { }

  async agregarPublicacion(p:Publicacion) {
    const listado:Publicacion[]= await this.getPublicacion()
    listado.push(p)
    Preferences.set({key: this.clave, value: JSON.stringify(listado)})
  }



  async getPublicacion():Promise<Publicacion[]> {
    const listado = await Preferences.get({key: this.clave })
    return JSON.parse(listado.value ?? "[]");
  }

  eliminarPublicación(p:Publicacion){}


  buscarContacto(titulo:string){}
}
