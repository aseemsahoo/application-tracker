import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() btnClick : EventEmitter<void> = new EventEmitter();
  onClick() : void 
  {
    this.btnClick.emit();
  }
}
