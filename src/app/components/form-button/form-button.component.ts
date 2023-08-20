import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  constructor(private router : Router) {}
  ngOnInit(): void {
  }
  @Input() text : string;
  isSelected : boolean = false;

  onClick() : void 
  {
    this.isSelected = !this.isSelected;
    console.log(this.text);
    if(this.text === 'Login')
    {
      this.router.navigate(['login']);
    }
    else
    {
      this.router.navigate(['signup']) ;
    }
  }

}
