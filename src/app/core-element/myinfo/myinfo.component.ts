import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class MyInfo {
  constructor(
  public name: String,
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
     private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUserinfo();
  }
    getUserinfo(){
      this.httpClient.get<any>('http://localhost:8080/getMyInfo').subscribe((Response)=> {this.myinfo=Response});
        console.log(this.myinfo)
        }
      }
    
  


