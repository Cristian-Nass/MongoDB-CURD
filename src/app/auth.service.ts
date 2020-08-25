import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse, RegisterDto } from './auth.models';
import { url } from './helpers/constents';

@Injectable()
export class AuthService {
  private logged = false;
  private authStatusSource = new BehaviorSubject<boolean>(false);
  authStauts$ = this.authStatusSource.asObservable();

  constructor(private http: HttpClient) {
    this.logged = Boolean(sessionStorage.getItem('token'));
    this.authStatusSource.next(this.logged);
  }

  // do it tonight
  register(registerDto: RegisterDto) {}

  login(user) {
    this.http.post<LoginResponse>(url, user).subscribe(response => {
      sessionStorage.setItem('token', response.token);
      this.logged = true;
      this.authStatusSource.next(true);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    this.logged = false;
    this.authStatusSource.next(false);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getTokenExpirationDate(token: string) {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(decoded.exp * 1000);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    return Boolean(date.valueOf() < new Date().valueOf());
  }

  isAuthenticated(): boolean {
    if (this.logged && !this.isTokenExpired()) {
      return true;
    } else {
      return false;
    }
  }

  getLoggedUserRole(token?: string): string {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return '';
    }
    const decoded = jwt_decode(token);
    return decoded.role;
  }

  isAdmin(): boolean {
    const role = this.getLoggedUserRole();
    return Boolean(role === 'admin');
  }
}
