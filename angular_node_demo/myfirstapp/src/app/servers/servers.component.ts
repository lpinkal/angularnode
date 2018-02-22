import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowuser=false;
  createserver='not created';
  servername='test';
  filtername:string='';
  iscreated=false;
  servers=['test1','test2'];
  curruntdate=new Date();

  appstatus=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000);
  });

  constructor(private userservice:UsersService) {
    setTimeout(()=>{
      this.allowuser=true;
    },2000)
  }

  createser(){
    this.createserver=`server created with name ${this.servername}`;

  }

  servernameupdate(){
    this.iscreated=true;
    this.servers.push(this.servername)
  }

  ngOnInit() {
  }

  onactivate(i:number){
    this.userservice.userActivated.next(this.servers[i]);
  }

}
