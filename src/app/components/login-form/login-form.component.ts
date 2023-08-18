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
  posts: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  onClick(): void {
    this.userService.login(this.username, this.password).subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    })
  }
}
