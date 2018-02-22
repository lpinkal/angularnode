import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {serveraccountservice} from "../serveraccount.service";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit ,OnChanges ,DoCheck , AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvele') element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('paragraph') para:ElementRef;
  constructor(private serveraccountservice:serveraccountservice) {
    console.log('constructor called');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngonchanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngoninit called');
    console.log('content'+this.para.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngdocheck called');
  }

  ngAfterContentInit(){
    console.log('ngaftercontent called');
    console.log('content'+this.para.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngaftercontentchecked called');
  }
  ngAfterViewInit(){
    console.log('ngafterviewcalled');
  }

  ngAfterViewChecked(){
    console.log('ngafterviewchecked called');
    console.log('header'+this.header.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngondestroy called');
  }

}
