import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = 'http://localhost:4900/clients';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IClient[]> {
    return this.httpClient.get<IClient[]>(`${this.baseURL}`);
  }

  find(id?: number): Observable<IClient> {
    return this.httpClient.get<IClient>(`${this.baseURL}/${id}`);
  }

  add(matiere: IClient): Observable<IClient> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: IClient): Observable<IClient> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IClient> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
