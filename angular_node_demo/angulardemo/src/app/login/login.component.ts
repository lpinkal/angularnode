import {Component, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "../server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serverservice:ServerService,private router:Router) { }
  @Output() session:string;
  ngOnInit() {
  }
  onlogin(f:NgForm){
    this.serverservice.login(f.value).subscribe( (res: any) => {
      //console.log(response);
       // console.log(JSON.parse(response._body).message);
       // let res = JSON.parse(response._body).message;
        if (res === 'sucess') {
          this.session=f.value.email;
          console.log(this.session);
          this.router.navigate(['home']);
        }
        else{
          this.router.navigate(['not-found']);
        }
      },
      (err) => {
        console.log('err');
        this.router.navigate(['not-found']);
      })
  }

  googlelogin1(f:NgForm){
    // alert('google ');
    console.log('dfvgr');
    this.serverservice.googlelogin(f.value).subscribe((response:any)=>{
      console.log(JSON.parse(response._body));
    })
  }

}
