import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileDto } from 'src/app/employeeprofile-modal/models/employe-profile-entity';
import { GlobalService } from 'src/app/service/global.service';
export class People {
  constructor(
    public name: String,
    public surname: String,
    public joining_date: String,
    public emp_status: String,
    public job_title: String,
    public department: String,
    public email: String,
    public address: String

  ) {
  }
}
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [GlobalService]
})
export class PeopleComponent implements OnInit {

  peoples: People[] = [];
  authService: any;
  eMasterDetails: any;
  //public empProfiles: EmployeeProfileDto[] = [];
  constructor(
    private httpClient: HttpClient, public globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }
  getPeople() {
    this.httpClient.get<any>('http://localhost:8080/employee-profile').subscribe(resp => {
    this.globalService.saveEmployeeProfileResponseList(resp);
    });
  }
  openDetails() {
    alert("sachin")
  }

  delete(empId: string | undefined) {
    if (!empId) {
      alert("Invalid emp");
      return;
    }
    this.httpClient.get<any>('http://localhost:8080/delete_employee/'+empId,).subscribe(resp => {
      this.getPeople();
    });
  }
}
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function getPeople() {
  throw new Error('Function not implemented.');
}

