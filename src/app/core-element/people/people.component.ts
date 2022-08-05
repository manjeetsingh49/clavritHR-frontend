import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class People {
  constructor(
  public name: String,
  public surname:String,
  public joining_date: String,
  public  emp_status: String,
  public  job_title: String,
  public  department: String,
  public  email: String,
  public address: String
  
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
    openDetails(){
      alert("sachin")
    }
  }
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function getPeople() {
  throw new Error('Function not implemented.');
}

