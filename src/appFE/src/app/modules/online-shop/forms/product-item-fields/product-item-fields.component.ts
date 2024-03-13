import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormArray} from '@angular/forms';


import { FormBuilder } from '@angular/forms';
import { max } from 'rxjs';
import { ProductItemDTO } from '../../models/product-item-dto';
import { FormGroupOf } from '../../../../core/core.module';

@Component({
  selector: 'app-product-item-fields',
  standalone: false,
  templateUrl: './product-item-fields.component.html',
  styleUrl: './product-item-fields.component.scss',
})
export class ProductItemFieldsComponent {
  @Input({ required: true }) item: any;

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  set value(v: ProductItemDTO | null) {
    this.form.reset(v as any);
  }

  @Output()
  readonly SubmitEvent = new EventEmitter<ProductItemDTO>();

  readonly form = new FormGroup<FormGroupOf<ProductItemDTO>>({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(255),
    ]),
    category: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(255),
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(500),
    ])
  });

  Submit() {

    if (this.form.valid) {
      // propagate Event
      const raw = this.form.getRawValue() as ProductItemDTO;
      this.SubmitEvent.emit(raw);
    }else{

    }

  }

  Reset() {
    this.form.reset(this.item);
  }
}
