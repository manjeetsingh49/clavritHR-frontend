import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from "../service/EmployeeService";
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeHrmsDetail, EmployeeMasterDetails, EmployeePersonalDetail, EmployeeRequestDto } from './models/employe-profile-entity';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-employeeprofile-modal',
  templateUrl: './employeeprofile-modal.component.html',
  styleUrls: ['./employeeprofile-modal.component.css'],
  providers:  [EmployeeService]
  
})
export class EmployeeprofileModalComponent implements OnInit {
  public role: any;
  public ePersonalDetails: EmployeePersonalDetail = new EmployeePersonalDetail("", "", "", 18, "", "", "");
  public eHrmsDetails: EmployeeHrmsDetail = new EmployeeHrmsDetail;
  public eMasterDetails : EmployeeMasterDetails = new EmployeeMasterDetails;
 
  constructor(private empService:EmployeeService, private authService: AuthenticationService) { }
  
  ngOnInit(): void {
  }

  eprofiledata(){
   console.log("Eproifledat click " + JSON.stringify(this.ePersonalDetails));
   console.log("HRMS click " +  JSON.stringify(this.eHrmsDetails));
   console.log("MASTER click " +  JSON.stringify(this.eMasterDetails));
   this.eMasterDetails.id=this.authService.getData(this.authService.TOKEN_KEY);
   let body = new EmployeeRequestDto(this.ePersonalDetails, this.eHrmsDetails, this.eMasterDetails);
   this.empService.sendEmployeeDetails(body).subscribe(resp => {
    console.log(resp);
    alert(resp.message);
    this.ePersonalDetails = new EmployeePersonalDetail("", "", "", 18, "", "", "");
    this.eHrmsDetails = new EmployeeHrmsDetail;
    this.eMasterDetails = new EmployeeMasterDetails;
   
  },
  error => {
    console.log(error);
    alert(error.error.message);
  })
  
  }

}
