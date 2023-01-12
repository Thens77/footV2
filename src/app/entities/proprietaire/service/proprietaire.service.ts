import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProprietaire, Proprietaire } from '../proprietaire.model';

@Injectable({
  providedIn: 'root',
})
export class ProprietaireService {
  private baseURL = 'http://localhost:4900/proprietaires';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IProprietaire[]> {
    return this.httpClient.get<IProprietaire[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<Proprietaire> {
    return this.httpClient.get<Proprietaire>(`${this.baseURL}/${id}`);
  }

  add(matiere: IProprietaire): Observable<IProprietaire> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: IProprietaire): Observable<IProprietaire> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IProprietaire> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
