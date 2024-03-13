import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ProductItemDTO, ShopPayload } from '../../models/product-item-dto';
import { delay, of } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/services/auth-service.service';
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
})
export class AddItemComponent {
  @Output() ItemAddedEvent = new EventEmitter<ShopPayload<ProductItemDTO>>();
  @Output() ClosedForm = new EventEmitter();

  @ViewChild('newProductForm') public productForm: any;
  item: ShopPayload<ProductItemDTO> | undefined;
  /*
  readonly item$ = of(<ShopPayload<ProductItemDTO>>{
    id: 'mock',
    data: {
      title: 'mock',
    },
  }).pipe(delay(300)); // Mocks backend call
*/

  constructor(private authService: AuthService,private storeService: StoreService) {}

  CancelForm() {
    {
      this.productForm.Reset();
      this.ClosedForm.emit();
    }
  }
  AddItem(item: ProductItemDTO) {

    // Validazione stato request
    let product=item;
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
