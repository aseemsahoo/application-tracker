import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onClick(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    let userData = this.userService.login(this.loginForm.value).pipe(
      switchMap((loginResult) => {
        console.log('switchMap');
        console.log(loginResult);
        return this.userService.profile();
      })
    );

    // save it to userData in service, which is a Subject
    userData.subscribe({
      next: (data: any) => {
        console.log('userData in Login');
        console.log(data);
        this.userService.saveUser(data);
        this.router.navigate(['home']);
      },
    });

    // this.userService.login(this.loginForm.value)
    // .subscribe({
    //   next: (res) =>{
    //     console.log(res);
    //     this.router.navigate(['home', 2]);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     alert(err.status);
    //   }
    // })
    // receive token + id from /login and use this id to load home page
  }
}
