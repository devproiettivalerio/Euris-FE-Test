import { Component, OnDestroy, OnInit, ViewChild, effect, signal } from '@angular/core';
import { StoreService } from '../../services/store.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductItemDTO, ShopPayload } from '../../models/product-item-dto';
import { PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent implements OnInit, OnDestroy {
  getProductItems$: Observable<ShopPayload<ProductItemDTO>[]> | undefined;

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private storeService: StoreService
  ) {}

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

  ngOnDestroy() {

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
