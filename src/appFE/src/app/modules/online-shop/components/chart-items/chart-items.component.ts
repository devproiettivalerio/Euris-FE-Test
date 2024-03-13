import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-chart-items',
  templateUrl: './chart-items.component.html',
  styleUrl: './chart-items.component.scss',
})
export class ChartItemsComponent implements OnInit {
/*
  data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };
*/
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {

    this.storeService
      .getProductStatsData(environment._shopid_token)
      .subscribe((response) => {


        let labels  = new Array();
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
          }

        const config: any = {
          type: 'polarArea',
          data: _renderdata,
          responsive: true,
        };
        const canvas = document.getElementById(
          'canvas_products'
        ) as HTMLCanvasElement;
        new Chart(canvas, config);

        /*
        const chartType = 'polarArea';

       const chartDatasets = [
         {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'My First dataset' },
       ];

        const chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

        const chartColors = [
          {
            backgroundColor: [
              'rgba(219, 0, 0, 0.1)',
              'rgba(0, 165, 2, 0.1)',
              'rgba(255, 195, 15, 0.2)',
              'rgba(55, 59, 66, 0.1)',
              'rgba(0, 0, 0, 0.3)',
            ],
            hoverBackgroundColor: [
              'rgba(219, 0, 0, 0.2)',
              'rgba(0, 165, 2, 0.2)',
              'rgba(255, 195, 15, 0.3)',
              'rgba(55, 59, 66, 0.1)',
              'rgba(0, 0, 0, 0.4)',
            ],
            borderWidth: 2,
          },
        ];

        const chartOptions: any = {
          responsive: true,
        };
       */
      });

  }
}
