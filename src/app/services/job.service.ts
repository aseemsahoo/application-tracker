import { Injectable } from '@angular/core';
import { Job } from '../models/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}
  addJob(jobData: Job): void {}
  updateJob(jobData: Job): void {}
}
