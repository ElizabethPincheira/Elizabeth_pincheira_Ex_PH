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
  async agregarPublicacion(p: Publicacion) {
    const listado: Publicacion[] = await this.getPublicacion();
    listado.push(p);
    await Preferences.set({ key: this.clave, value: JSON.stringify(listado) });
  }

  //recuperar
  async getPublicacion(): Promise<Publicacion[]> {
    const listado = await Preferences.get({ key: this.clave });
    return JSON.parse(listado.value ?? "[]");
  }

  //eliminar
  async eliminar(p: Publicacion): Promise<void> {
    const listado: Publicacion[] = await this.getPublicacion();

    // Filtrar lista para excluir la publicación a eliminar
    const nuevaLista = listado.filter(aviso => aviso.titulo !== p.titulo);

    // Guardar la lista actualizada
    await Preferences.set({ key: this.clave, value: JSON.stringify(nuevaLista) });
  }
}
