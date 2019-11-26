import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  LoginData: object;
  constructor(private _http: HttpService) { }

  getData(){
    return this.LoginData = this._http.doGet('', '');
  }
}
