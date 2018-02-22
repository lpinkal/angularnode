import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ObservableComponent} from "./observable/observable.component";

const appRoute:Routes=[
  {path:'', component:RegistrationComponent},
  {path:'home', component:HomeComponent, children:[
    {path:'profile', component:ProfileComponent}
    ]},
  {path:'login', component:LoginComponent},
  {path:'observable', component:ObservableComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo:'not-found'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
