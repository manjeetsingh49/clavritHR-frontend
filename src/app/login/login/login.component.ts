import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  response : any;
  constructor(private loginService : LoginService) { }
   
  ngOnInit(): void {
  }
  
  login(emailId:string, password:string){
    console.log("emailId: " + emailId + ", password: "+ password );
    this.response = this.loginService.login(emailId, password).subscribe(resp => {
      console.log(resp);
      this.response = resp;
    });

  }
}
