import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  
  constructor(public authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.removeData("token");
    this.route.navigate(["/login"]);

  }

}
