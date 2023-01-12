import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { IClub } from 'src/app/entities/club/club.model';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  private baseURL = 'http://localhost:4900/clubs';

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<IClub[]> {
    return this.httpClient.get<IClub[]>(this.baseURL);
  }
  find(id: number): Observable<IClub> {
    return this.httpClient.get<IClub>(`${this.baseURL}/${id}`);
  }

  update(id: number, club: IClub): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
}
