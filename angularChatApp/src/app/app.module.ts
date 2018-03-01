import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QrComponent } from './qr/qr.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    ErrorpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
