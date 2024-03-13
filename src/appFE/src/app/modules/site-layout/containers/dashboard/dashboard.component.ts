import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

import { AuthService } from '../../../../core/services/auth-service.service';
import { EmployeeSelectComponent } from '../../../online-shop/components/employee-select/employee-select.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ThemeSelectComponent } from "../../components/theme-select/theme-select.component";
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [RouterModule,SharedModule, EmployeeSelectComponent, ThemeSelectComponent]
})
export class DashboardComponent implements OnInit {

  appName: any = environment.appName;
  currentEmployer: any|undefined;

  constructor(private authService:AuthService){

  }

  ngOnInit() {

    this.authService.AUTH_ID$.subscribe(
      (f)=>{
        this.currentEmployer = this.authService.GetCurrentUser();
    });
  }

  Logout(){
    this.authService.Logout();
    window.location.reload();
  }
}
