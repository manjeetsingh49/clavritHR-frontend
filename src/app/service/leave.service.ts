import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  public sendLeaveRequest(body: any): Observable<any> {
   
    return this.http.post<any>('http://localhost:8080/leave-request', body);
  }
}
