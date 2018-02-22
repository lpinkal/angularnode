import {ServerService} from "../server.service";
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent{
  user = {
    skills: [
      { name: 'JS',  selected: true, id: 1 },
      { name: 'CSS',  selected: false, id: 2 },
    ]
  }
  constructor() {

  }

  submit(f:NgForm){
    console.log(f.value);
  }

}
