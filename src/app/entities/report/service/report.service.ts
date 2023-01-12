import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReport } from '../report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseURL = 'http://localhost:4900/reports';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IReport[]> {
    return this.httpClient.get<IReport[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<IReport[]> {
    return this.httpClient.get<IReport[]>(`${this.baseURL}/form/${id}`);
  }

  add(matiere: IReport): Observable<IReport> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: IReport): Observable<IReport> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IReport> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
