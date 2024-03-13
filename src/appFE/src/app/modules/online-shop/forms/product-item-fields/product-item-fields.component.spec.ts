import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemFieldsComponent } from './product-item-fields.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

describe('ProductItemFieldsComponent', () => {
  let component: ProductItemFieldsComponent;
  let fixture: ComponentFixture<ProductItemFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductItemFieldsComponent,
        CommonModule,
        SharedModule,
        ,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
