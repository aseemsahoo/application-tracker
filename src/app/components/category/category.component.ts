import { Component, Input, OnInit } from '@angular/core';
import { jobList } from 'src/app/jobs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: string;
  // @Input() job: string;
  jobList: any;
  ngOnInit(): void {
    this.jobList = jobList;
  }
}
