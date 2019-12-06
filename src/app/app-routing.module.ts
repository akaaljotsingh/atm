import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });