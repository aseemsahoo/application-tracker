import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  id : number;
  posts : any;
  bool : boolean = false;
  constructor(private userService: UserService, private route : ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']; 
      console.log('1abc ' + params['id']) 
    });
    // this.userService.data().subscribe((response: any) => {
    //   this.posts = response;
    //   this.bool = true;
    //   // console.log(this.posts);
    // })
  }

}
