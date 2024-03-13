import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { OnlineShopModule } from '../../../online-shop/online-shop.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { EmployeeSelectComponent } from '../../../online-shop/components/employee-select/employee-select.component';
import { AuthService } from '../../../../core/services/auth-service.service';
import { RouterModule } from '@angular/router';
import { ThemeSelectComponent } from '../../components/theme-select/theme-select.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        SharedModule,
        EmployeeSelectComponent,
        ThemeSelectComponent,
      ],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
