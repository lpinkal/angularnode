import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {serveraccountservice} from "../serveraccount.service";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() servercreated=new EventEmitter<{name:string,content:string}>();
@Output('bpcreated') blueprintcreated=new EventEmitter<{name:string,content:string}>();
  //newServerName='';
  //newServerContent='';
  @ViewChild('localservercontent') localservercontent:ElementRef;
  constructor(private serveraccountservice:serveraccountservice) { }

  ngOnInit() {
  }
  addServer(name:HTMLInputElement){
    this.servercreated.emit({
      name:name.value,
      content:this.localservercontent.nativeElement.value
    })
  }
  addBlueprint(name:HTMLInputElement){
    this.blueprintcreated.emit({
      name:name.value,
      content:this.localservercontent.nativeElement.value
    })
  }
}
