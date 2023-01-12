import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClub } from 'src/app/entities/club/club.model'; 

@Injectable({
  providedIn: 'root',
})
export class HomeClientService {
  private baseURL = 'http://localhost:4900/clubs';

  constructor(private httpClient: HttpClient) {}

  afficheClub(): Observable<IClub[]> {
    return this.httpClient.get<IClub[]>(`${this.baseURL}/clubDispo`);
  } 
}
