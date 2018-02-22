import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerService} from "./server.service";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import { HttpInterceptor} from "./http.interceptor";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [	 ServerService,
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
  return new HttpInterceptor(backend, options);
}
