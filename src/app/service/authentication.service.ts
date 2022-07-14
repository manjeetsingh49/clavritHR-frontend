import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_KEY: string = "token";
  TOKEN_VALUE: string = "password";
  isLogin:boolean = false;
  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    this.isLogin = true;
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
    this.isLogin = false;
  }

  public clearData() {
    localStorage.clear();
    this.isLogin = false;
  }
}
