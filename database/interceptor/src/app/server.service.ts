import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class ServerService{
  constructor(private http:Http){}
  abc(){
    console.log('ts1');
    return this.http.get('http://localhost:3001/').map((res)=>{
      console.log('123');
      return res;
    });
  }
}
