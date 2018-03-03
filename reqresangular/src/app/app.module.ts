import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ServerService} from "./server.service";
import {HttpMethod} from "blocking-proxy/built/lib/webdriver_commands";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
