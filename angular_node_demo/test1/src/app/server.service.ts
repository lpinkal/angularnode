import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx"

@Injectable()
export class ServerService{

  constructor(private http:Http){}
  storedata(body){
    console.log(body);
    return this.http.post('http://localhost:3000/register',body);
  }

  display(){
    return this.http.get('http://localhost:3000/display').map((res)=>{
      return res.json();
    })
  }

  update(id,name){
    return this.http.post('http://localhost:3000/update',{id:id,name:name}).map((res)=>{
      return res.json();
    })
  }
  delete(id){
    return this.http.post('http://localhost:3000/delete',{id:id}).map((res)=>{
      return res.json();
    })
  }
}
