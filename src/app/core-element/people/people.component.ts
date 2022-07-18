import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class People {
  constructor(
  public name: String,
  public  address: String,
  public  emp_mail: String,
  public  phone_num: String,
  public  dob: String,
  public joining_date: String
  ){
  }
}
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  
  peoples: People[] = [];
  constructor( 
     private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }
    getPeople(){
      this.httpClient.get<any>('http://localhost:8080/getPeople').subscribe(Response=> {this.peoples=Response});
    }
  }
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function getPeople() {
  throw new Error('Function not implemented.');
}

