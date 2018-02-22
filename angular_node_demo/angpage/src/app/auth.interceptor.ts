import { Injectable } from '@angular/core';
import {Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor extends Http {
  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  get(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('interceptor');
    return super.request(url, options);
  }
  post(url: string ,body:any): Observable<Response> {
    let options=new RequestOptions();
    console.log(localStorage.getItem('acesstoken'));
    if(localStorage.getItem('acesstoken')){
      let header=new Headers({'acesstoken':localStorage.getItem('acesstoken')});
      options.headers=header;
    }
    options.withCredentials=true;
    console.log('interceptor');
    console.log(options);
    return super.post(url,body, options);
  }

}
