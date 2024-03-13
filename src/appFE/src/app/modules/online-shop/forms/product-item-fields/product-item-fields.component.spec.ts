import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemFieldsComponent } from './product-item-fields.component';

describe('ProductItemFieldsComponent', () => {
  let component: ProductItemFieldsComponent;
  let fixture: ComponentFixture<ProductItemFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductItemFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
