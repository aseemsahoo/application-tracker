import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router, private cookie: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method == 'GET') {
      // console.log(this.cookie.getToken());
      const newRequest = request.clone({
        headers: new HttpHeaders({ Authorization: this.cookie.getToken() }),
      });
      return next.handle(newRequest);
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('Err : ' + err.status);
          this.router.navigate(['signup']);
        }
        return throwError(() => new Error('Some other throwError'));
      })
    );
  }
}
