import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {}
  onClick(): void {
    this.userService.login({
      username: this.username,
      password: this.password,
    });
    // console.log(`${this.username} and ${this.password}`);
  }
}
