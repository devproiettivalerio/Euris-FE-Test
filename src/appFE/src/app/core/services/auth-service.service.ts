import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AUTH_ID = new BehaviorSubject<string>('');
  public AUTH_ID$ = this.AUTH_ID.asObservable();

  setData(data: string) {
    this.AUTH_ID.next(data);
  }
  Login(data: string) {
    localStorage.setItem('AUTH_ID', data);

    this.setData(data);

    return data;
  }

  isLoggedIn() {
    return localStorage.getItem('AUTH_ID') != null;
  }
  GetCurrentUser() {
    return localStorage.getItem('AUTH_ID');
  }

  Logout() {
      localStorage.removeItem('AUTH_ID');
      this.AUTH_ID.next('');
      this.AUTH_ID.complete();
      return true;
  }
  constructor() {}
}
