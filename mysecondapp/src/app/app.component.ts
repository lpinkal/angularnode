import {Component, OnInit} from '@angular/core';
import {serverservice} from "./server.service";
import {serveraccountservice} from "./serveraccount.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[serverservice,serveraccountservice]
})
export class AppComponent implements OnInit{
 // serverlist=[{type:'server',name:'test1',content:'test1 content'}];
  list:{type:string,name:string,content:string}[]=[];

 constructor(private serverservise:serverservice,private accountservice:serveraccountservice){}

 ngOnInit(){
   this.list=this.accountservice.serverlist;
   console.log(this.list);
 }

  Serveradded(serverdata:{name:string,content:string}){
    this.list.push({
      type:'server',
      name:serverdata.name,
      content:serverdata.content
    })
    // let servise=new serverservice();
    // servise.disp();
    this.serverservise.disp();
    console.log(this.list);
  }
  Blueprintadded(serverdata:{name:string,content:string}){
    this.list.push({
      type:'Blueprint',
      name:serverdata.name,
      content:serverdata.content
    })
    console.log(this.list);
  }
  onnamechange(){
    this.list[0].name='changed'
    console.log('name changed')
  }
  ondelete(){
    this.list.splice(0,1);
  }
}
