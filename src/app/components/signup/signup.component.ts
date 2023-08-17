import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Output() btnClick :  EventEmitter<void> = new EventEmitter();

  onClick() : void {
    this.btnClick.emit();
  }
}
