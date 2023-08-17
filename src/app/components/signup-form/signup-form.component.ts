import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit
{
  fullname: string;
  email: string;
  username: string;
  password: string;
  ngOnInit(): void {
  }
  onClick() : void
  {
    console.log(this.fullname + this.email + this.username + this.password);
  }
}
