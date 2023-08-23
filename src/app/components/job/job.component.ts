import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  @Input() company: string;
  onClick(): void {
    console.log(this.company + 'clicked');
  }
  openModal(): void {
    this.router.navigate(['home/edit']);
  }
}
