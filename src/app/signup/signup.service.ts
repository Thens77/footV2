import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterC, RegisterP } from './register.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseURL = "http://localhost:4900"
  

  constructor(private http: HttpClient, private  router : Router) { }



  register(register : RegisterP): Observable<any> {
    return this.http.post(`${this.baseURL}/signup`, register , httpOptions);
  }
  registerC(register : RegisterC): Observable<any> {
    return this.http.post(`${this.baseURL}/signupC`, register , httpOptions);
  }
}
