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
  {
    path: 'tier-lists',
    loadComponent: () => import('./pages/tier-lists/tier-lists').then((c) => c.TierLists),
  },
  {
    path: 'recruit-ninjas',
    loadComponent: () =>
      import('./pages/recruit-ninjas/recruit-ninjas').then((c) => c.RecruitNinjas),
  },
];
