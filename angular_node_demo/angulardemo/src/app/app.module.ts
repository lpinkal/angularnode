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
import { ImagecompComponent } from './imagecomp/imagecomp.component';
import {Angular2TokenService} from "angular2-token";
import {FileSelectDirective} from "ng2-file-upload";
import {Ng2ImgMaxModule} from "ng2-img-max";
import { DisplayimageComponent } from './displayimage/displayimage.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    ErrorpageComponent,
    ObservableComponent,
    ImagecompComponent,
    FileSelectDirective,
    DisplayimageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2ImgMaxModule
  ],
  providers: [ServerService,Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
