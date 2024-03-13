import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItemsComponent } from './chart-items.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ChartItemsComponent', () => {
  let component: ChartItemsComponent;
  let fixture: ComponentFixture<ChartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartItemsComponent],
      providers: [HttpClient, HttpHandler],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
