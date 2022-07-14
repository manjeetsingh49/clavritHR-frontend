import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(emailId: string, password: string): Observable<any> {
    const body = { 'emailId': emailId, 'password': password };
    return this.http.post<any>('http://localhost:8080/login', body);
  }
}
