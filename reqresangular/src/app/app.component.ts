import { Component } from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchtext='';
  users=[];
  pageNum=1;
  perpage=2;
  totalPage=[];
  perpagearray=[2,3,4,6];
  constructor(private serverservice:ServerService){
   this.fun();
  }
  prevPage(){
    this.pageNum--;
    this.fun();
    console.log(this.pageNum);
  }
  nextPage(){
    this.pageNum++;
    this.fun();
    console.log(this.pageNum);
  }
  changeDDL(pageN){
      this.pageNum=pageN;
    this.fun();
    console.log(this.pageNum);
  }
  changeperpage(page){
    console.log(page);
    this.perpage=+page;
    this.totalPage=[];
    for(let i=0;i<12;i=i+this.perpage){
      this.totalPage.push(i/this.perpage);
    }
    console.log(this.totalPage);
  }
  fun(){
    this.serverservice.displaydata(this.pageNum,this.perpage).subscribe((res)=>{
      console.log(res.data);
      this.users=res.data;
    });
  }
}
