import {Component} from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`
  .online{
    color: aliceblue;
  }`]

})
export class ServerComponenet{
serverid:number=10;

  serverstatus:string='online';

  constructor(){
    this.serverstatus=Math.random()>0.5? 'online' :'offline'
  }

  generatestatus(){
    return this.serverstatus;
  }

  getcolor(){
    return this.serverstatus==="online" ? 'green' :'red';
  }
}
