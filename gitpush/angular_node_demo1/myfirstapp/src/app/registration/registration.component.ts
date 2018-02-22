import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
@ViewChild('f') formdata:NgForm;
defaultemail:string='a@a.com';
genders=['male','female'];
username='';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.username=this.formdata.value.userdata.username;
    console.log(this.formdata);
    this.formdata.reset();
  }

}
