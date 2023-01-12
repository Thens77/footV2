import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPanier } from '../panier.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private baseURL = 'http://localhost:4900/paniers';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IPanier[]> {
    return this.httpClient.get<IPanier[]>(`${this.baseURL}`);
  }

  listByClient(id : number): Observable<IPanier[]> {
    return this.httpClient.get<IPanier[]>(`${this.baseURL}/user/${id}`);
  }
  find(id: number): Observable<IPanier[]> {
    return this.httpClient.get<IPanier[]>(`${this.baseURL}/${id}`);
  }

  add(matiere: IPanier): Observable<IPanier> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: IPanier): Observable<IPanier> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IPanier> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
