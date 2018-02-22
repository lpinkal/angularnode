import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import {environment} from "./environment";
import 'rxjs/Rx';

@Injectable()
export class ServerService{

  constructor(private http:Http){}

  storedata(value:any){
    console.log('storedata'+value);
    return this.http.post(environment.baseURL+'post',{value});
  }


  login(body){
    console.log('login');
     return this.http.post(environment.baseURL+'login',{"username":body.username,"password":body.password}).map(
       (response:any)=>{
         return response.json();
       }
     );
    // return this.http.get('http://localhost:3000/login').map(
    //   (response:any)=>{
    //     const data=response.json();
    //     return data;
    //   });
  }

  googlelogin(body){
    console.log('google');
     // return this.http.get(
     //   'http://localhost:3000/google');
   // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("demo").innerHTML = this.responseText;
    //   }
    // };
    // xhttp.open("POST", "http://localhost:3000/google", true);
    // //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhttp.send();

      window.open(environment.baseURL+'google');
    return body;
  }

  upload(formdata:FormData){
    console.log(formdata);
    return this.http.post(environment.baseURL+'upload',formdata).map(
      (response:any)=>{
          console.log(JSON.parse(response._body))
        return JSON.parse(response._body);
      }
    );
  }

  displayimage(){
    return this.http.get(environment.baseURL).map((res)=>{
      return res.json();
    })
  }
}

