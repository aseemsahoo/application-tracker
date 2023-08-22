import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
  gotoHome(): void {
    this.router.navigate(['home']);
  }
}
