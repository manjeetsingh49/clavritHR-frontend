import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/employee-profile"
  apiUrl="http://localhost:8080/delete_employee/"

  public getEmployee(){
    return this.http.get<any>(this.url);
  }
  public deleteEmployee(empId: string):Observable<Object>{
    return this.http.get<string>(this.apiUrl+empId,{responseType:'text' as 'json'});
  }
}
