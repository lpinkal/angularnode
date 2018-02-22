import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowuser=false;
  createserver='not created';
  servername='test';
  iscreated=false;
  servers=['test1','test2'];
  constructor() {
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

}
