import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private cookie : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> 
  {
    if(request.method == 'GET')
    {
      // console.log(this.cookie.getToken());
      const newRequest = request.clone(
        {
         headers: new HttpHeaders({'Authorization' : this.cookie.getToken()})
        });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
