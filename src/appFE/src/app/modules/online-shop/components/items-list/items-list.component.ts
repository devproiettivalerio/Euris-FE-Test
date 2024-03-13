import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../services/store.service';

import { ProductItemDTO, ShopPayload } from '../../models/product-item-dto';
import { PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../../environments/environment';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ChartItemsComponent } from '../chart-items/chart-items.component';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    SharedModule,
    ProductItemComponent,
    ChartItemsComponent,
    AddItemComponent,
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent implements OnInit {

  products: ShopPayload<ProductItemDTO>[] | undefined;
  storeName: any;
  storeCategory: any;

  pageEvent: PageEvent | undefined;
  length = 0;
  pageSize = 3;
  pageIndex = 0;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.RefreshData(environment._shopid_token);
  }

  constructor(private storeService: StoreService) {}

  @ViewChild('drawer') public drawer: any;
  RefreshData(idStore: string) {
    if (
      idStore != null &&
      idStore != undefined &&
      idStore != '' &&
      idStore != ''
    )
      this.storeService
        .getStoreProductsPagging(idStore, this.pageIndex + 1, this.pageSize)
        .subscribe((response) => {
          this.length = response.length;
          this.products = response.list;
        });
  }

  ngOnInit() {
    this.storeService
      .getStoreData(environment._shopid_token)
      .subscribe((response) => {
        this.storeName = response.name;
        this.storeCategory = response.category;
      });

    this.RefreshData(environment._shopid_token);
  }
  // Callback
  OnCloseForm() {
    this.drawer.toggle();
  }
  OnItemAdded(item: ShopPayload<ProductItemDTO>) {
    this.products!.push(item);
    this.RefreshData(environment._shopid_token);
  }
  OnItemRemoved(key: ShopPayload<ProductItemDTO>) {
    const index = this.products!.indexOf(key, 0);
    if (index > -1) {
      this.products!.splice(index, 1);
      this.RefreshData(environment._shopid_token);
    }
  }
}
