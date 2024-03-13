import { Routes } from '@angular/router';



// MAIN Route
// Entry point definiti per il sito web

export const routes: Routes = [
  {
    // Default URL
    path: '',
    // Utilizza Lazy load per includere le rotte definite in SiteLayoutModule
    loadChildren: () =>
      import('./modules/site-layout/site-layout.module').then(
        (m) => m.SiteLayoutModule
      ),
  },
];
