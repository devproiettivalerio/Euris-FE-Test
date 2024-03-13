import { Subject, delay } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../../../core/services/auth-service.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-employee-select',
  templateUrl: './employee-select.component.html',
  styleUrl: './employee-select.component.scss',
})
export class EmployeeSelectComponent {
  @Output() EmployerCacheEvent = new EventEmitter<string>();

  public employees: any[] | undefined;

  public storeName: any | undefined;
  public storeCategory: any | undefined;
  public employeer: any | undefined;

  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.AUTH_ID$.subscribe((sid: string) => {});

    this.storeService
      .getStoreData(environment._shopid_token)
      .pipe(delay(0))
      .subscribe((response) => {
        this.employees = response.employees;
        this.storeCategory = response.category;
        this.storeName = response.name;
      });
  }

  OnChangeEmployer(event: any) {
    this.employeer = event.options[0].value;
  }
  SelectEmployer(event: any) {
    let _user = this.authService.Login(this.employeer);

    if (_user != null) this.EmployerCacheEvent.emit(_user);
  }
}
