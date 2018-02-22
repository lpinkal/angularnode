import {Http} from "@angular/http";

class App{
  constructor(private http:Http){
    this.http.get('http://localhost:3001/').map((res)=>{
      console.log('123');
      return res;
    });
  }
}
