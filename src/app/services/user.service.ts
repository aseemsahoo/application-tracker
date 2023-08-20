import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient, private cookie : CookieService) {}

  login(data : any) : Observable<any> {
    this.http.post(`${this.url}/login`, data).subscribe((data : any) => {
      console.log(data.token);
      this.cookie.setToken(data.token);
    });
    
    // const token = this.cookie.getToken();
    // const headers = new HttpHeaders({
    //   'Authorization': `${token}`
    // });
    return this.http.get(`${this.url}/profile`);
  }
  
  // data() : Observable<any>
  // {
  //   return this.http.get(`${this.url}/data`);
  // }

}
