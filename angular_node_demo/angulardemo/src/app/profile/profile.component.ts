import { Component } from '@angular/core';
import {ServerService} from "../server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private serverservice:ServerService,private router:Router) { }



}
