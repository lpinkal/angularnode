import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  myimagepath='../assets/qr.png';
  androidimg='../assets/android_logo.png';
  appleimg='../assets/apple_logo.png';

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  signin(event){
    if(event.target.checked){
      this.router.navigate(['home']);
    }
  }

}
