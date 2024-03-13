import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelectComponent } from './employee-select.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EmployeeSelectComponent', () => {
  let component: EmployeeSelectComponent;
  let fixture: ComponentFixture<EmployeeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSelectComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
