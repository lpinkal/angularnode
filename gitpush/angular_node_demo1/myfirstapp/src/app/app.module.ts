import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponenet} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { FindlanetDirective } from './findlanet.directive';
import { AccountsDirective } from './accounts.directive';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ObservableComponent } from './observable/observable.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponenet,
    ServersComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    FindlanetDirective,
    AccountsDirective,
    UsersComponent,
    AboutComponent,
    UserComponent,
    Server1Component,
    Server2Component,
    PageNotFoundComponent,
    RegistrationComponent,
    RegistrationReactiveComponent,
    ErrorpageComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
