import { Component, OnInit } from '@angular/core';
import {ServerService} from "../server.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  genders=['male','female'];
  error:boolean=false;
  constructor(private serverservice:ServerService,private router:Router ) { }

  onsave(f:NgForm) {
    console.log(f.value);
    this.serverservice.storedata(f.value).subscribe(
      (response: any) => {
        console.log(JSON.parse(response._body).message);
        let res = JSON.parse(response._body).message;
        if (res === 'sucess') {
          this.error = false;
          this.router.navigate(['home']);
        }
        else{
          this.error = true;
        }
      },
      (err) => {
        console.log('error');
        this.error = true;
      }
    );
  }

}
