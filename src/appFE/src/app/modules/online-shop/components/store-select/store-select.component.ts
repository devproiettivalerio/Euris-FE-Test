import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-store-select',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './store-select.component.html',
  styleUrl: './store-select.component.scss',
})
export class StoreSelectComponent implements OnInit {
  public stores: any[] | undefined;

  public currentStoreName: string | undefined;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response;
      this.currentStoreName = this.stores[0].data.name;
      this.storeService.setStoreId(this.stores[0].id);
    });
  }
}
