import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class SiteLayoutModule {}
