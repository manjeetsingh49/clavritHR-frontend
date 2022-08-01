import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { HttpClient } from '@angular/common/http';
export class MyInfo {
  constructor(
  public Name: String,
  public  address: String,
  public  emp_mail: String,
  public  phone_num: String,
  public  dob: String,
  public joining_date: String
  ){}
  }

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyInfoComponent implements OnInit {
 
  
  myinfo: MyInfo[] = [];
  constructor( 
     private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUserinfo();
  }
    getUserinfo(){
      this.HttpClient.get<any>('http://localhost:8080/getMyInfo').subscribe(Response=> {this.myinfo=Response});
        
        }
      }
    
  


