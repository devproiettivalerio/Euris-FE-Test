import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { OnlineShopModule } from '../online-shop/online-shop.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ThemeSelectComponent } from './components/theme-select/theme-select.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'shop',
        component: DashboardComponent,
        loadChildren: () =>
          import('../online-shop/online-shop.module').then(
            (m) => m.OnlineShopModule
          ),
      },
    ],
  },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)],

})
export class SiteLayoutModule {}
