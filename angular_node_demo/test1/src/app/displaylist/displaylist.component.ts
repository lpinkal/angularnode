import {Component, ElementRef, OnInit} from '@angular/core';
import {ServerService} from "../server.service";

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  constructor(private serverservice:ServerService,private el:ElementRef) { }

  ngOnInit() {

    let div=this.el.nativeElement.querySelector("#table");
    console.log(div);

    this.serverservice.display().subscribe((res)=>{
      console.log(res);
      let html=`<table class="table"><tr><th>id</th><th>name</th><th>state</th><th>city</th><th></th><th></th></tr>`;

      for(let i=0;i<res.length;i++){
        html+=`<tr>
<td>${res[i].id}</td>
<td><div id="id${res[i].id}">${res[i].name}</div></td>
<td>${res[i].state}</td>
<td>${res[i].city}</td>
<td appupdate><button type="button" class="btn-sm btn-primary update" id="${res[i].id}">Update</button></td>
<td appupdate><button type="button" class="btn-sm btn-primary delete" id="${res[i].id}">Delete</button></td>
</tr>`
      }
      html+=`</table>`;

      div.innerHTML=html;
    })
  }

}
