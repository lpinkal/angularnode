import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
  serveername:string;
  constructor(private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.params.subscribe((params:Params)=>{
      this.serveername=params.name;
    })


  }
  editserver(){
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'});
  }
}
