import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
  even=[0,2,4];
  onlyodd=false;
  odd=[1,3];
  name = '';
  value=5;
}
