import {Component, TemplateRef} from '@angular/core';
import {AuthService} from "./auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DialogService} from "ng2-bootstrap-modal";
import {ModaldemoComponent} from "./modaldemo/modaldemo.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divstate',[
          state('normal',style({
            backgroundColor:'red',
            transform:'translateX(0)'
          })),
          state('highlighted',style({
            'background-color':'blue',
            transform:'translateX(100px)'
          })),
      // transition('normal=>highlighted',animate(300)),
      transition('highlighted<=>normal',animate(800))
    ]),
    trigger('div2state',[
      state('normal',style({
        backgroundColor:'red',
        transform:'translateX(0) scale(1)'
      })),
      state('highlighted',style({
        'background-color':'blue',
        transform:'translateX(100px) scale(1)'
      })),
      state('shrink',style({
        'background-color':'blue',
        transform:'translateX(0) scale(0.5)'
      })),
      // transition('normal=>highlighted',animate(300)),
      transition('highlighted<=>normal',animate(800)),
      transition('shrink<=>*',[style({
        'background-color':'orange'
      }),
      animate(100,style({
        borderRadius:'50px'
      })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  state='highlighted';
  wildcard='normal';
  modalRef: BsModalRef;
  constructor(private auth:AuthService,private dialogService:DialogService,private modalService: BsModalService){}

  animate(){
    console.log('animate');
    this.state=='normal'?this.state='highlighted':this.state='normal';
    this.wildcard=='normal'?this.wildcard='highlighted':this.wildcard='normal';
    console.log(this.state)
  }

  shrink(){
    this.state=='normal'?this.state='highlighted':this.state='normal';
    this.wildcard=='shrink'?this.wildcard='normal':this.wildcard='shrink';
  }

  openmodel(){
    let disposable = this.dialogService.addDialog(ModaldemoComponent, {
      title:'Confirm title',
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
      disposable.unsubscribe();
    },10000);
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
