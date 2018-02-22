import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerService} from "./server.service";
import {HttpModule} from "@angular/http";
import { DisplaylistComponent } from './displaylist/displaylist.component';
import {RoutingModule} from "./routing.module";



@NgModule({
  declarations: [
    AppComponent,
    DisplaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
