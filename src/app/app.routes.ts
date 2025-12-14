import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio').then((c) => c.Inicio),
  },
  {
    path: 'members',
    loadComponent: () => import('./pages/members/members').then((c) => c.Members),
  },
];
