import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
   }

  onClick(): void {
    this.userService.login(this.username, this.password).subscribe((response: any) => {
      // receive token + id from /login and use this id to load home page
      const id = 2;
      this.router.navigate(['home', id]);
    })
  }
}
