import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSelectComponent } from './store-select.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('StoreSelectComponent', () => {
  let component: StoreSelectComponent;
  let fixture: ComponentFixture<StoreSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSelectComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
