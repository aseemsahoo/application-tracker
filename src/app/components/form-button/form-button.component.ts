import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent {
  @Input() text : string;
  
  @Output() btnClick : EventEmitter<void> = new EventEmitter();
  onClick() : void 
  {
    this.btnClick.emit();
  }

}
