import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginForm : FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]]
    });
  }

  onClick(): void {
    this.userService.login(this.loginForm.value).subscribe((response: any) => {
      // receive token + id from /login and use this id to load home page
      console.log(response);
      const id = 2;
      this.router.navigate(['home', id]);
    })
  }
}
