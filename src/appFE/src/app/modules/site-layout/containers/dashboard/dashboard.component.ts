import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItemsListComponent } from '../../../online-shop/components/items-list/items-list.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, ItemsListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
