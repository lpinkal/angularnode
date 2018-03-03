import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class ServerService{
  constructor(private http:Http){}
  displaydata(pageno,perpage){
    return this.http.get('https://reqres.in/api/users?page='+pageno+'&&per_page='+perpage).map((res)=>{
      return res.json();
    })
  }
}
