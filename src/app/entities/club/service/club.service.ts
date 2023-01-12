import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club, IClub } from '../club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseURL = 'http://localhost:4900/clubs';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Club[]> {
    return this.httpClient.get<Club[]>(`${this.baseURL}`);
  }

  add(club: Club): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, club);
  }

  get(id?: number): Observable<Club> {
    return this.httpClient.get<Club>(`${this.baseURL}/${id}`);
  }

  getbyProp(id?: number): Observable<Club[]> {
    return this.httpClient.get<Club[]>(`${this.baseURL}/prop/${id}`);
  }

  update(id?: number, club?: Club): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
