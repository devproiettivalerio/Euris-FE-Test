import { SharedModule } from './../../../../shared/shared.module';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent {
  color: string = '#00FF00';
  col: number = 4;
  colspan: number = 1;
  rows: string = '2:1';

  constructor() {
    this.SetPanelView();
  }

  SetPanelView(): void {
    console.log('SetPanelView');
    this.color = '#00FFFF';
    this.col = 1;
    this.colspan = 1;
    this.rows = '2:1';
    return;
  }

  SetGridView(): void {
    console.log('SetGridView');
    this.color = '#00FF00';
    this.col = 4;
    this.colspan = 1;
    this.rows = '2:1';
    return;
  }
}
