import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ServerService} from "./server.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    ErrorpageComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
