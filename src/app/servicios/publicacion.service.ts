import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

private clave = "AGENDA";

  constructor() { }
  //guardar
  async agregarPublicacion(p:Publicacion) {
    const listado:Publicacion[]=await this.getPublicacion()
    listado.push(p)
    // console.log(listado)
    await Preferences.set({key: this.clave, value: JSON.stringify(listado)})
  }

  //recuperar
  async getPublicacion():Promise<Publicacion[]> {
    const listado = await Preferences.get({key: this.clave })

    console.log("-------------------")
    console.log(JSON.stringify(listado))
    console.log("-------------------")
    return JSON.parse(listado.value ?? "[]");
  }

}


//----------------------------
