import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent implements OnInit {
signupform:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
