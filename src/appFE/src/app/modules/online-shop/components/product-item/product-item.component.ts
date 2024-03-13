import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from '../../dialogs/delete-item-dialog/delete-item-dialog.component';
import { ShopPayload, ProductItemDTO } from '../../models/product-item-dto';
import { environment } from '../../../../../environments/environment';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) item: ShopPayload<ProductItemDTO> | undefined;

  @Output() ItemRemovedEvent = new EventEmitter<ShopPayload<ProductItemDTO>>();

  constructor(public dialog: MatDialog, private storeService: StoreService) {}

  RemoveItem() {
    // Validazione stato request
    let product = this.item;
    const raw = JSON.stringify(product);

    // invio richiesta al server
    this.storeService
      .deleteStoreProduct(environment._shopid_token, this.item?.id!)
      .subscribe((response) => {
        // Notifico evento agli altri componenti
        this.ItemRemovedEvent.emit(this.item!);
      });

  }
  OpenRemoveItemDialog(event: any) {
    const raw: any = {
      data: {
        id: this.item!.id,
        title: this.item!.data.title,
      },
    };
    let dialogRef = this.dialog.open(DeleteItemDialogComponent, raw);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'ok') {
        this.RemoveItem();
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
