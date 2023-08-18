import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tmp } from '../temp';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3001/login';
  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }) {
    const tt: Tmp = {
      username: data.username,
      password: data.password,
    };
    const body = {
      username: data.username,
      password: data.password,
    };
    console.log('REACH 1');

    this.http.post<any>(this.url, body).subscribe((data) => {
      console.log(data);
    });

    console.log('REACH 2');
    // this.http.get(`${this.url}`, tt).subscribe((result) => {
    //   console.log(result);
    // });
  }
}
