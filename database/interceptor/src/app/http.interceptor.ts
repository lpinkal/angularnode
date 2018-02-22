import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptor extends Http {
  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  get(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('interceptor');
    return super.request(url, options);
  }


}
