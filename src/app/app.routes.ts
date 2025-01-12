import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../app/paginas/crear-publicacion/crear-publicacion.page').then((m) => m.CrearPublicacionPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ver-publicacion',
    loadComponent: () => import('./paginas/ver-publicaciones/ver-publicaciones.page').then( m => m.VerPublicacionesPage)
  },
];
