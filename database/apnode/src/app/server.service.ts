

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment"
import 'rxjs/Rx';
@Injectable()
export class ServerService{
  constructor(private http:HttpClient){

  }

  displaydatabase(){
    return this.http.get('http://localhost:3001/database').map((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }
}
