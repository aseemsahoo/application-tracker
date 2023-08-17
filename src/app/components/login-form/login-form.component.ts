import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit
{
  username : string;
  password : string;
  ngOnInit(): void
  {
  }
  onClick() : void
  {
    console.log(`${this.username} and ${this.password}`);
  }
}
