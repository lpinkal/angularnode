import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent implements OnInit {

  obj = {

    name: String,
    age: Number,
    city: String

  }
  constructor() { }

  ngOnInit() {
  }

  Calling(frm:NgForm)
  {
      this.obj.name = frm.value.fullname;
      this.obj.age = frm.value.age;
      this.obj.city = frm.value.city;


  }
}
