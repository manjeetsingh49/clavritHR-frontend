import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LoginClass } from 'src/app/class/login.class';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  response: any;
  msg: string = "";

  constructor(private loginService: LoginService, private route: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(emailId: string, password: string) {
    var code;
    var login = new LoginClass(emailId, password);
    console.log("emailId: " + emailId + ", password: " + password);
    this.response = this.loginService.login(login).subscribe(resp => {
      console.log(resp);
      code = resp.code;
      this.response = resp;

      console.log("code : " + code)
      if (code == 200) {
        this.authService.saveData(this.authService.TOKEN_KEY, this.authService.TOKEN_VALUE);
        this.route.navigate(["/user-dashboard"]);
      }  else if (code == 201) {
        this.authService.saveData(this.authService.TOKEN_KEY, this.authService.TOKEN_VALUE);
        this.route.navigate(["/leave"]);
      } else {
        this.msg = "Invalid credentials, Please enter correct";
      }

    });


  }
}

