import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
//import {Observable} from 'rxjs/Rx';

import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private _http: Http) { }

  // get requests
  doGet(url, headers) {
    let options = new RequestOptions({ headers: headers });
    let URL: string = environment.endPointUrl.concat(url);
    return this._http.get(URL, options).pipe(map((response: Response) => response.json()))
      // .pipe(catchError((err) => {
      //   this.errorHandler(err);
      //   return Observable.throw(err || 'Krypton Server Error')
      // }))
      ;

  }

//   // post requests
//   doPost(url, data, headers) {
//     let options = new RequestOptions({ headers: headers });
//     let URL: string = environment.endPointUrl.concat(url);
//     return this._http.post(URL, data, options)
//       .pipe(map((response: Response) => response.json()))
//       // .pipe(catchError((err) => {
//       //   this.errorHandler(err);
//       //   return Observable.throw(err || 'Krypton Server Error')
//       // }))
//       ;
//   }

  
//   // put requests
//   public doPut(url, data, headers) {
//     let options = new RequestOptions({ headers: headers });
//     let URL: string = environment.endPointUrl.concat(url);
//     return this._http.put(URL, data, options)
//       .pipe(map((response: Response) => response.json()))
//       // .pipe(catchError((err) => {
//       //   this.errorHandler(err);
//       //   return Observable.throw(err || 'Krypton Server Error')
//       // }))
//       ;
//   }

//   public doDelete(url, headers) {
//     let options = new RequestOptions({ headers: headers });
//     let URL: string = environment.endPointUrl.concat(url);
//     return this._http.delete(URL, options)
//       .pipe(map((response: Response) => response.json()))
//       // .pipe(catchError((err) => {
//       //   this.errorHandler(err);
//       //   return Observable.throw(err || 'Krypton Server Error')
// //}))
// ;
//   }

  


  // // Error response of all http requests
  // private errorHandler(error: Response) {
  //   console.error(error);
  //   // if response is 401 return to login page
  //   if (error.status === 401) {
  //     this.removeCookieIfExist(Globals.LOGGED_IN_PRODUCT_COOKIE_KEY);
  //     this.removeCookieIfExist(Globals.USER_AUTH_COOKIE_KEY);
  //     const origin = window.location.origin;
  //     window.location.href = origin;
  //   }

  // }

  // private removeCookieIfExist(cookieName) {

  //   var _cookie = this._cookieService.getCookie(cookieName);

  //   if (!(_cookie == null || _cookie == undefined || _cookie == "")) {
  //     this._cookieService.removeCookie(cookieName);
  //   }
  // }
}