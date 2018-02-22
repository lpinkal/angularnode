import { Component } from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serverservice:ServerService){}
  abc(){
    console.log('ts');
    this.serverservice.abc().subscribe((res)=>{
      console.log(res);
    })
    ;
  }
}
