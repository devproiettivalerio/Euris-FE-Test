
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StoreService } from './services/store.service';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { StoreSelectComponent } from './components/store-select/store-select.component';
import { ProductItemFieldsComponent } from './forms/product-item-fields/product-item-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from "./components/add-item/add-item.component";
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/employer-guard';
import { EmployeeSelectComponent } from './components/employee-select/employee-select.component';
import { AuthService } from '../../core/services/auth-service.service';
import { DeleteItemDialogComponent } from './dialogs/delete-item-dialog/delete-item-dialog.component';
import { ChartItemsComponent } from './components/chart-items/chart-items.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./containers/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
];

@NgModule({
  declarations: [],
  exports: [],
  providers: [StoreService, AuthService],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  /*

  EmployeeSelectComponent,
  ChartItemsComponent,
  ProductItemComponent,
  AddItemComponent,
  ItemsListComponent,
  StoreSelectComponent,
  ProductItemFieldsComponent,
  DeleteItemDialogComponent,
   */
})
export class OnlineShopModule {}
