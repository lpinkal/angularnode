
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QrComponent} from "./qr/qr.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {HomeComponent} from "./home/home.component";


const appRoutes:Routes=[
  {path:'qr',component:QrComponent},
  {path:'home',component:HomeComponent},
  {path:'error',component:ErrorpageComponent},
  {path:'**',redirectTo:'error'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
