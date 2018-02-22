import {NgModule} from "@angular/core";
import {ServersComponent} from "./servers/servers.component";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {Server2Component} from "./server2/server2.component";
import {Server1Component} from "./server1/server1.component";
import {UserComponent} from "./user/user.component";
import {ServerComponenet} from "./server/server.component";
import {UsersComponent} from "./users/users.component";
import {AboutComponent} from "./about/about.component";
import {AuthGuard} from "./auth-guard.service";
import {RegistrationComponent} from "./registration/registration.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {ObservableComponent} from "./observable/observable.component";

const appRoute:Routes=[
  {path:'users', component:UsersComponent, children:[
      {path:':id/:name', component:UserComponent}
    ]},
  {path:'servers', canActivateChild:[AuthGuard],component:ServersComponent, children:[
      {path:':name', component:Server1Component},
      {path:':name/edit', component:Server2Component}
    ]},
  {path:'about', component:AboutComponent},
  {path:'observable', component:ObservableComponent},
  {path:'server', component:ServerComponenet},
  {path:'registration',component:RegistrationComponent},
  {path:'not-found', component:ErrorpageComponent, data:{message:'page not found'}},
  {path:'**', redirectTo:'not-found'}
];
@NgModule({
imports:[
  // RouterModule.forRoot(appRoute,{useHash:true})
  RouterModule.forRoot(appRoute)
],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
