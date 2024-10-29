import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'scroll',
    title: 'Scroll Suave',
    loadComponent: () => import('./scroll/components/scroll/scroll.component')
  },
  {
    path: '**',
    redirectTo: 'scroll'
  }
];
