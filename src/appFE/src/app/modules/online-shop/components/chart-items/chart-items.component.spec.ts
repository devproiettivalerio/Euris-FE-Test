import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItemsComponent } from './chart-items.component';

describe('ChartItemsComponent', () => {
  let component: ChartItemsComponent;
  let fixture: ComponentFixture<ChartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartItemsComponent]
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
