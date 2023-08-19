import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(username : string, password : string) : Observable<any> {
    const body = {
      'username': username,
      'password': password,
    };
    this.http.post(`${this.url}/login`, body).subscribe((data : any) => {
      console.log('token');
      console.log(data.token);
      localStorage.setItem('token', data.token);
    });
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });
    return this.http.get(`${this.url}/profile`, { headers: headers });
  }
  
  data() : Observable<any>
  {
    return this.http.get(`${this.url}/data`);
  }

}
