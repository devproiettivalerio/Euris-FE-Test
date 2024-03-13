import { Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  appName: any = environment.appName;
  currentEmployer: any|undefined;

  constructor(private router:Router,private authService:AuthService){

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
