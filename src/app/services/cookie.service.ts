import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getToken() : string {
    const token = localStorage.getItem('token');
    if(token == null)
    {
      return '';
    }
    return token;
  }
  
  setToken(token: string) : void {
    localStorage.setItem('token', token);
  }
}
