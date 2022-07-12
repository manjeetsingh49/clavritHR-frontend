import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor( private authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    if(this.authService.getData(this.authService.TOKEN_KEY)==this.authService.TOKEN_VALUE){
      
    }else{
      this.route.navigate([""]);
    }
  }

}
