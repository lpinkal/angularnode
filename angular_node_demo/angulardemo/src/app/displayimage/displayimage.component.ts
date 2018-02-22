import { Component, OnInit } from '@angular/core';
import {ServerService} from "../server.service";

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrls: ['./displayimage.component.css']
})
export class DisplayimageComponent implements OnInit {
  images=[];
  constructor(private serverservice:ServerService) { }
  ngOnInit() {
    this.images=[];
    this.serverservice.displayimage().subscribe((res)=>{
      console.log(res);
      for(let i=0;i<res.length;i++){
        this.images.push(`../../assets/uploads/${res[i]}`);
      }
      console.log(this.images);
    })
  }

}
