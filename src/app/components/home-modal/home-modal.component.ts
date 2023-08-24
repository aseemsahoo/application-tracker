import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryList } from 'src/app/category';
import { Job } from 'src/app/models/Job';
import { HomeService } from 'src/app/services/home.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css'],
})
export class HomeModalComponent implements OnInit {
  addJobForm: FormGroup;
  cgList: string[];
  submitted: boolean = false;
  constructor(
    private router: Router,
    private homeService: HomeService,
    private jobService: JobService
  ) {}
  ngOnInit(): void {
    // later get it from homeService
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
      salary: userData.salary == undefined ? null : userData.salary,
      deadline: userData.deadline == undefined ? null : userData.deadline,
      comments: userData.comments,
    };

    console.log(jobData);
    this.jobService.addJob(jobData);
    this.addJobForm.reset();
  }
}
