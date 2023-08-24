import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { categoryList } from 'src/app/category';
import { jobList } from 'src/app/jobs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // id: number = 0;
  cgList: string[];
  // posts: User[] = [];
  jobList: any;
  user: any;
  isLogged: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cgList = categoryList;
    // this.jobList = jobList;
    // get id from router
    // this.route.params.subscribe( params => { this.id = params['id']; });

    // // get notified of change in userData
    // this.userService.userData.subscribe((user: User) => {
    //   console.log('subscribed changes in home: ');
    //   console.log(user);
    //   this.posts.push(user);
    //   this.isLogged = user ? true : false;
    //   // this.posts.push(...this.posts, user);
    // });
  }
  onClick(): void {
    // this.userService.profile().subscribe((data : any) => {
    //   this.posts.push(data);
    // })
  }
  openModal(): void {
    this.router.navigate(['home/add']);
  }
}
