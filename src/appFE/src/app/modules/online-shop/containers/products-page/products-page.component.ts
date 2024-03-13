import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { OnlineShopModule } from '../../online-shop.module';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
  standalone: true,
  imports: [SharedModule, OnlineShopModule],
})
export class ProductsPageComponent {

}
