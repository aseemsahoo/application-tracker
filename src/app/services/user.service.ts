import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, catchError, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { CookieService } from '../config/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData = new BehaviorSubject<any>({
    username: '',
    password: '',
  });
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/login`, data).pipe(
      map((data: any) => {
        // Perform your operations on the response data here
        this.cookie.setToken(data.token);
        return data;
      }),
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  // in progress
  logout(): void {
    this.userData.next(null);
  }

  // return this.http.post(`${this.url}/login`, data);
  profile(): Observable<any> {
    return this.http.get(`${this.url}/profile`);
  }
  saveUser(user: User): void {
    this.userData.next(user);
  }
}
