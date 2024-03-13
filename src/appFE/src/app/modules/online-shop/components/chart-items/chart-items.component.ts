import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { environment } from '../../../../../environments/environment';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-chart-items',
  templateUrl: './chart-items.component.html',
  styleUrl: './chart-items.component.scss',
})
export class ChartItemsComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService
      .getProductStatsData(environment._shopid_token)
      .subscribe((response) => {
        let labels = new Array();
        let datasets = new Array();

        response.map((row) => {
          labels.push(row.category);
          datasets.push(row.numberOfProducts);
        });

        const _renderdata = {
          labels: labels,
          datasets: [
            {
              label: 'Rapporto Prodotti/Quantità',
              data: datasets,
            },
          ],
        };

        const config: any = {
          type: 'polarArea',
          data: _renderdata,
          responsive: true,
        };
        const canvas = document.getElementById(
          'canvas_products'
        ) as HTMLCanvasElement;
        new Chart(canvas, config);
      });
  }
}
