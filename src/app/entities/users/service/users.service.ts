import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'http://localhost:4900/utilisateurs';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<IUsers> {
    return this.httpClient.get<IUsers>(`${this.baseURL}/${id}`);
  }

  add(matiere: IUsers): Observable<IUsers> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: IUsers): Observable<IUsers> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IUsers> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
