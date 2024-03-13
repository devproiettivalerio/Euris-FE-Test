import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { OnlineShopModule } from '../../online-shop.module';
import { ItemsListComponent } from '../../components/items-list/items-list.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
  standalone: true,
  imports: [SharedModule, ItemsListComponent],
})
export class ProductsPageComponent {

}
