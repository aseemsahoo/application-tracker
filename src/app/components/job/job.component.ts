import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  // change it to Job type when you implement database bcoz i havent added details, salary, etc in mock array
  @Input() object: string;
  onClick(): void {
    console.log(this.object);
  }
  openModal(): void {
    const navigationExtras: NavigationExtras = {
      state: { example: this.object },
    };

    this.router.navigate(['home/edit'], navigationExtras);
  }
}
