import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TestService } from '../test.service';
import { ENGINE_METHOD_STORE } from 'constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TestService]
})

export class LoginComponent implements OnInit {

  status: number = 0;
  email: string = '';
  password: string = '';
  msg: string = '';
  LoginData: object;

  constructor(private _http: TestService) { }

  ngOnInit() {

  }

  PostLogin() {

    this.LoginData = this._http.getData();
    console.log(this.LoginData);
    
    // if (this.password != "" && this.email != "") {
    //   this.status = 200;
    //   this.msg = "Logged In";
    // } else {
    //   this.status = 404;
    //   this.msg = "Fill the fields";
    // }
  }
}
