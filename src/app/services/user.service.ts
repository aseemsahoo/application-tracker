import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000/login';
  constructor(private http: HttpClient) {}

  login(username : string, password : string) : Observable<any> {
    const body = {
      'username': username,
      'password': password,
    };
    let res : any;
    return this.http.post(this.url, body);
    
    // this.url = "http://localhost:3000/profile";

    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Authorization': `${token}`
    // });

    // this.http.get(this.url, { headers: headers }).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
