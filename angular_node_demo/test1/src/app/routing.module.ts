import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DisplaylistComponent} from "./displaylist/displaylist.component";
import {AppComponent} from "./app.component";

const approutes:Routes=[
  {path:'displaylist',component:DisplaylistComponent},
  {path:'',component:AppComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(approutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{

}
