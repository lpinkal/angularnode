import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-modaldemo',
  templateUrl: './modaldemo.component.html',
  styleUrls: ['./modaldemo.component.css']
})
export class ModaldemoComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService:DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }


}
