import { Component } from '@angular/core';
import { SharedModule } from './../../../../shared/shared.module';
import { EmployeeSelectComponent } from "../../components/employee-select/employee-select.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  standalone: true,
  imports: [SharedModule, EmployeeSelectComponent],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  OnLoginSuccess() {
    this.reloadComponent(false, '/');
  }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    //skipLocationChange:true means dont update the url to / when navigating
    console.log('Current route I am on:', this.router.url);
    const url = self ? this.router.url : urlToNavigateTo;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${url}`]).then(() => {
        window.location.reload();
        console.log(`After navigation I am on:${this.router.url}`);
      });
    });
  }
}
