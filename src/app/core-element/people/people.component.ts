import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileDto } from 'src/app/employeeprofile-modal/models/employe-profile-entity';
import { GlobalService } from 'src/app/service/global.service';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [GlobalService]
})
export class PeopleComponent implements OnInit {

  authService: any;
  eMasterDetails: any;
  public empProfiles: EmployeeProfileDto[] = [];
  constructor(
    private httpClient: HttpClient, public globalService: GlobalService,
    private peopleData:PeopleService,
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }
  getPeople() {
    this.peopleData.getEmployee().subscribe((resp)=>{
     this.globalService.saveEmployeeProfileResponseList(resp);
    },
    (err)=>{
      console.log(err);
    }
    );
  }
  openDetails(empId:string|undefined) {
    if (!empId) {
      alert("Invalid emp");
      return;
    }
    this.peopleData.viewEmployee(empId).subscribe(data2=>{
      console.log(data2);
    })
  }
  deletePeople(empId:string|undefined) {
    if (!empId) {
      alert("Invalid emp");
      return;
    }
      this.peopleData.deleteEmployee(empId).subscribe( data => {
        console.log(data);
        this.getPeople();
      })
      
    }
    updateDetails(empId:string|undefined){
      if (!empId) {
        alert("Invalid emp");
        return;
      }
     this.peopleData.updateEmployee(empId).subscribe(data=>{
    console.log(data);
})
    }
  }
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function getPeople() {
  throw new Error('Function not implemented.');
}

