import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { punchIn } from 'src/app/class/punchIn.class';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  empId!: any;
  empName: string = "";
   punch:punchIn = new punchIn();
  constructor( public auth: AuthenticationService ) {  }

  ngOnInit(): void  {
    this.empId =this.auth.getData(this.auth.TOKEN_KEY);
    this.empName = this.punch.empName
   console.log( this.punch.empName + this.empId)
  }
  getData(){
    
  }
}
