import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/site-layout/site-layout.module').then(
        (m) => m.SiteLayoutModule
      ),
  },
];

