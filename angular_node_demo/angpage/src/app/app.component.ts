import {Component} from '@angular/core';
import {AuthService} from "./auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  constructor(private auth:AuthService){}

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
}
