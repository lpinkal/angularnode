import {Http} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class ServerService{

  constructor(private http:Http){}

  storedata(value:any){
    console.log('storedata');
    return this.http.post('http://localhost:3000/post',{value});
  }

  login(value:any){
    console.log('login');
    return this.http.post('http://localhost:3000/login',{value});
  }
}
