import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {environment} from "./environment";
import 'rxjs/Rx';
@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  storedata(value: any) {
    console.log('storedata');
    return this.http.post(environment.baseURL+'post', {value}).map(
      (response:any)=>{
        console.log("Response object register : ",response);
        return response;
      }
    );

  }
  login(body){
    console.log('login');
    return this.http.post(environment.baseURL+'login',{"username":body.username,"password":body.password}).map(
      (response:any)=>{
        console.log(response);
        return response;
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

  display(name){
    return this.http.post(environment.baseURL+'profile',{name:name,user:name}).map(
      (response:any)=>{
        return response.json();
      }
    );
  }

  editpsw(psw){
    console.log('editsave service');
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'edit',{psw:psw,user:user}).map(
      (response:any)=>{
        return response.json();
      }
    );
  }
  delete(user){
        return this.http.post(environment.baseURL+'delete',{user:user}).map(
          (res:any)=>{
            return res.json();
          }
        )
  }

  poststudent(body){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'studentpost',{body:body,user:user}).map(
      (res:any)=>{
        return res.json();
      }
    )
  }

  displaystudent(){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'displaystudent',{user:user}).map((res)=>{
      return res.json();
    })
  }

  deletestudent(email){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'deletestudent',{email:email,user:user}).map((res)=>{
      return res.json();
    })
  }

  updatestudent(email){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'updatestudent',{email:email,user:user}).map((res)=>{
      return res.json();
    })
  }
  saveupdate(body,email){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'saveupdate',{value:body,email:email,user:user}).map((res)=>{
      return res.json();
    })
  }

  logout(){
    const user=localStorage.getItem('user');
    return this.http.post(environment.baseURL+'logout',{user:user}).map((res)=>{
      return res.json();
    })
  }

  upload(formdata){
    console.log(formdata);
    return this.http.post(environment.baseURL+'upload',formdata).map((res)=>{
      return res.json();
    })
  }
}
