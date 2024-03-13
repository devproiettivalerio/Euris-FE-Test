import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { environment } from '../../../../../environments/environment';
import { ProductItemDTO, ShopPayload } from '../../models/product-item-dto';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../../../core/services/auth-service.service';

import { ProductItemFieldsComponent } from '../../forms/product-item-fields/product-item-fields.component';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [SharedModule,ProductItemFieldsComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
})
export class AddItemComponent {
  @Output() ItemAddedEvent = new EventEmitter<ShopPayload<ProductItemDTO>>();
  @Output() ClosedForm = new EventEmitter();

  @ViewChild('newProductForm') public productForm: any;
  item: ShopPayload<ProductItemDTO> | undefined;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) {}

  CancelForm() {
    {
      this.productForm.Reset();
      this.ClosedForm.emit();
    }
  }
  AddItem(item: ProductItemDTO) {
    // Validazione stato request
    let product = item;
    product.employee = this.authService.GetCurrentUser()!;
    product.reviews = undefined;
    const raw = JSON.stringify(product);

    // invio richiesta al server
    this.storeService
      .addStoreProducts(environment._shopid_token, raw)
      .subscribe((response) => {
        const newid = response as string;
        const event: ShopPayload<ProductItemDTO> = {
          id: newid,
          data: product,
        };

        // Notifico evento agli altri componenti
        this.ItemAddedEvent.emit(event);
        this.CancelForm();
      });
  }
}
