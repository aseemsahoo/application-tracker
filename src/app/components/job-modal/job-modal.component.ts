import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryList } from 'src/app/category';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.css'],
})
export class JobModalComponent implements OnInit {
  addJobForm: FormGroup;
  cgList: string[];
  company: string = 'temp';
  submitted: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.cgList = categoryList;
    this.addJobForm = new FormGroup({
      company: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    });
  }
  closeModal(): void {
    const modelDiv = document.getElementById('myModal');
    this.router.navigate(['home']);
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.addJobForm.invalid) {
      return;
    }
    let userData = this.addJobForm.value;

    console.log(userData);
    this.addJobForm.reset();
  }
}
