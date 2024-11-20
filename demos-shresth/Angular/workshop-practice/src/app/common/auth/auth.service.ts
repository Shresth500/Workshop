import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../environments/environment';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'auth';
  private apiUrl = enviroment.apiUrl;
  constructor(private http: HttpClient) {}
  login(credentials: any) {
    return this.http
      .post<any>(`${this.apiUrl}/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((loginResponse) => {
          localStorage.setItem(this.AUTH_KEY, JSON.stringify(loginResponse));
        })
      );
  }
  logout() {
    localStorage.removeItem(this.AUTH_KEY);
  }
  getUser() {
    const authStr = localStorage.getItem(this.AUTH_KEY);

    if (!authStr) return '';
    return JSON.parse(authStr);
  }
  getToken() {
    const authStr = localStorage.getItem(this.AUTH_KEY);

    if (!authStr) return '';
    return JSON.parse(authStr).authToken;
  }
  isloggedin() {
    const authStr = localStorage.getItem(this.AUTH_KEY);

    if (!authStr) return false;
    return true;
  }
}
