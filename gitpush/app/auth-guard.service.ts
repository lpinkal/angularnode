import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authservice:AuthService,private router:Router){};
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authservice.isauthenticated().then((authenticated:boolean)=>{
      if(authenticated){
        return true;
      }else {
        this.router.navigate(['/about'])
      }
    });
    return undefined;
  }

}
