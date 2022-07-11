import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';



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
    console.log("emailId: " + emailId + ", password: " + password);
    this.response = this.loginService.login(emailId, password).subscribe(resp => {
      console.log(resp);
      code = resp.code;
      this.response = resp;

      console.log("code : " + code)
      if (code == 200) {
        this.authService.saveData('token', 'password');
        this.authService.saveData(emailId, "email")
        this.route.navigate(["/user-dashboard"]);
      } else {
        this.msg = "Invalid credentials, Please enter correct";
      }

    });


  }
}

