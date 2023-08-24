import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { categoryList } from 'src/app/category';
import { Job } from 'src/app/models/Job';
import { JobService } from 'src/app/services/job.service';

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
  temp: string;
  constructor(private router: Router, private jobService: JobService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { example: string };
    this.temp = state.example;
    console.log(this.temp + ' routed to modal form');
  }
  ngOnInit(): void {
    this.cgList = categoryList;
    this.addJobForm = new FormGroup({
      company: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      // change salary to int, deadline to date
      salary: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    });
  }
  closeModal(): void {
    // const modelDiv = document.getElementById('myModal');
    this.router.navigate(['home']);
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.addJobForm.invalid) {
      return;
    }
    let userData = this.addJobForm.value;

    let jobData: Job = {
      company: userData.company,
      title: userData.title,
      link: userData.link,
      category: userData.category,
      salary: userData.salary,
      deadline: userData.deadline,
      comments: userData.comments,
    };
    this.jobService.updateJob(jobData);
    console.log(userData);
    this.addJobForm.reset();
  }
}
