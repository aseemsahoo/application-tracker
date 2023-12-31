import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  id : number;
  posts : User[] = [];
  isLogged : boolean = false;
  constructor(private userService: UserService, private route : ActivatedRoute)
  {  }

  ngOnInit(): void 
  {
    // get id from router
    this.route.params.subscribe( params => { this.id = params['id']; });

    // get notified of change in userData
    this.userService.userData.subscribe((user : User) => {
      console.log("subscribed changes in home: ");
      console.log(user);
      this.posts.push(user);
      this.isLogged = user ? true : false;
      // this.posts.push(...this.posts, user);
    })
  }
  onClick() : void {
    this.userService.profile().subscribe((data : any) => {
      this.posts.push(data);
    })
  }
  onLogout() : void {
    this.userService.logout();
  }
}
