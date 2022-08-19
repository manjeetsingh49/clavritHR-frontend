import { Injectable } from '@angular/core';
import { EmployeeProfileDto } from '../employeeprofile-modal/models/employe-profile-entity';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public empProfiles: EmployeeProfileDto[] = [];
  public key: string = "EmployeeList"
  constructor() { 
  }

  public saveEmployeeProfileResponseList(response:any[]) {
    localStorage.setItem(this.key, JSON.stringify(response));
    this.empProfiles = response;
    return this.empProfiles;
  }

  public appendToEmployeeProfileList(item: any){
    var response :any = localStorage.getItem(this.key);
    var list = JSON.parse(response);
    list.push(item);
    this.saveEmployeeProfileResponseList(list);
    this.empProfiles = list;
    return this.empProfiles;
  }

  public getEmployeeProfileList() {
    var response :any = localStorage.getItem(this.key);
    this.empProfiles = JSON.parse(response)
    return this.empProfiles;
  }
}
