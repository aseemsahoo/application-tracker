import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showLogin: boolean = true;

  // OBSERVER PATTERN
  private subject = new Subject<any>();

  constructor() {}

  // this will change boolean value, this is called when the buttons are clicked
  toggleForm(): void {
    // console.log(this.showLogin);
    this.showLogin = !this.showLogin;
    this.subject.next(this.showLogin);
  }

  // this will basically notify the subscribers
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
