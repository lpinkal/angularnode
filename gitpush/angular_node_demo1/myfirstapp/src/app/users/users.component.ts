import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private authservice:AuthService) { }

  ngOnInit() {
  }
  onabout(){
    this.router.navigate(['/about']);
  }

  onreload(){
    this.router.navigate(['/users'],{relativeTo:this.route})
  }

  onlogin(){
    this.authservice.login();
    console.log('login');
  }
  onlogout(){
    this.authservice.logout();
    console.log('logout');
  }

}
