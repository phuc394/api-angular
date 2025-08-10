import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/detail/detail').then(m => m.Detail)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
