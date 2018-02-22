import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServerService} from "./server.service";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {AuthService} from "./auth.service";
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {AuthGuard} from "./auth-gaurd.service";
import {AuthInterceptor} from "./auth.interceptor";
import { FormTestingComponent } from './form-testing/form-testing.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    HomeComponent,
    StudentdetailsComponent,
    DisplaystudentComponent,
    ErrorpageComponent,
    FormTestingComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ServerService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new AuthInterceptor(backend, options);
}
