import {Component, DoCheck, ElementRef, OnChanges, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "./server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  Gujrat=['Navsari','Surat','Valsad'];
  Maharastra=['m1','m2'];
  Rajasthan=['r1','r2','r3','r4'];
  Delhi=['d1','d2','d3'];


  constructor(private serverservice:ServerService,private el:ElementRef,private router:Router){}

  ngOnChanges(){
    console.log('ngonchange');
  }
  ngDoCheck(){
    console.log('docheck');
  }

  ngOnInit(){

    let div=this.el.nativeElement.querySelector("#table");
    console.log(div);

    this.serverservice.display().subscribe((res)=>{
      console.log(res);

      let pagebtn=this.el.nativeElement.querySelector("#pagebtn");
      let btndisp='';
      let cnt=1;
      for(let j=0;j<res.length;j=j+5){
       btndisp+=`<button type="button" class="btn next" id="${j}">${cnt}</button>`
        cnt++;
      }
      pagebtn.innerHTML=btndisp;



//       let html=`<table class="table"><tr><th>id</th><th>name</th><th>state</th><th>city</th><th></th><th></th></tr>`;
//       for(let i=0;i<5 && i<res.length;i++){
//         html+=`<tr>
// <td>${res[i].id}</td>
// <td><div id="id${res[i].id}">${res[i].name}</div></td>
// <td>${res[i].state}</td>
// <td>${res[i].city}</td>
// <td><button type="button" class="btn-sm btn-primary update" id="${res[i].id}">Update</button></td>
// <td><button type="button" class="btn-sm btn-primary delete" id="${res[i].id}">Delete</button></td>
// </tr>`
//       }
//       html+=`</table>`;
//
//       div.innerHTML=html;




      let nextbtn=this.el.nativeElement.querySelectorAll('.next');
      for(let i=0;i<nextbtn.length;i++){
        nextbtn[i].addEventListener('click',()=>{
            console.log(nextbtn[i].id);
            let limit=nextbtn[i].id;

          let html=`<table class="table"><tr><th>id</th><th>name</th><th>state</th><th>city</th><th></th><th></th></tr>`;
      for(let j=limit;j<+limit+5 && j<res.length;j++){
        html+=`<tr>
<td>${res[j].id}</td>
<td><div id="id${res[j].id}">${res[j].name}</div></td>
<td>${res[j].state}</td>
<td>${res[j].city}</td>
<td><button type="button" class="btn-sm btn-primary update" id="${res[j].id}">Update</button></td>
<td><button type="button" class="btn-sm btn-primary delete" id="${res[j].id}">Delete</button></td>
</tr>`
      }
      html+=`</table>`;
      div.innerHTML=html;




      let btn=this.el.nativeElement.querySelectorAll('.update');
      console.log(btn);
      for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',()=>{

          let adiv=this.el.nativeElement.querySelector(`#id${btn[i].id}`);
          let x=adiv.innerHTML;
          console.log(x);
          console.log(adiv);
          let html=`<input type="text" value="${x}" id="val${btn[i].id}"><button type="button" id="save${btn[i].id}">save</button>`;
          adiv.innerHTML=html;





          let save=this.el.nativeElement.querySelector(`#save${btn[i].id}`);
          save.addEventListener('click',()=>{
            console.log('save');
            let val=this.el.nativeElement.querySelector(`#val${btn[i].id}`).value;
            adiv.innerHTML=val;

            this.serverservice.update(btn[i].id,val).subscribe((res)=>{
              console.log(res);
            })
          });
        })




      }


      console.log(btn);
      let bdel=this.el.nativeElement.querySelectorAll('.delete');
      for(let i=0;i<bdel.length;i++){
        bdel[i].addEventListener('click',()=>{
          console.log(bdel[i].id);
          this.serverservice.delete(bdel[i].id).subscribe((res)=>{
            console.log(res);
          })
        })
      }


      console.log(bdel);

        })
      }
    })
  }


  submitdata(f:NgForm){
    console.log(f.value);
    this.serverservice.storedata(f.value).subscribe((res)=>{
      console.log(res);
    });
    this.router.navigate(['']);
    f.resetForm();
  }



  sel(state){
    console.log(state);
    let city=this.el.nativeElement.querySelector("#city");
    let html=`<option value='' ></option>`;
    if(state=='Gujrat'){
      for(let i=0;i<this.Gujrat.length;i++){
        html+=`<option value=${this.Gujrat[i]} >${this.Gujrat[i]}</option>`
      }
      city.innerHTML=html;
    }
    if(state=='Maharastra'){
      for(let i=0;i<this.Maharastra.length;i++){
        html+=`<option value=${this.Maharastra[i]} >${this.Maharastra[i]}</option>`
      }
      city.innerHTML=html;
    }
    if(state=='Rajasthan'){
      for(let i=0;i<this.Rajasthan.length;i++){
        html+=`<option value=${this.Rajasthan[i]} >${this.Rajasthan[i]}</option>`
      }
      city.innerHTML=html;
    }
    if(state=='Delhi'){
      for(let i=0;i<this.Delhi.length;i++){
        html+=`<option value=${this.Delhi[i]} >${this.Delhi[i]}</option>`
      }
      city.innerHTML=html;
    }
  }

}
