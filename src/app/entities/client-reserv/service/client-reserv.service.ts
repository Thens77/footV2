import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientReserv, IClientReserv } from '../client-reserv.model';

@Injectable({
  providedIn: 'root'
})
export class ClientReservService {
  private baseURL = 'http://localhost:4900/clientreservations';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ClientReserv[]> {
    return this.httpClient.get<ClientReserv[]>(`${this.baseURL}`);
  }

  listByclient(id? : number): Observable<ClientReserv[]> {
    return this.httpClient.get<ClientReserv[]>(`${this.baseURL}/panier/${id}`);
  }

  find(id?: number): Observable<ClientReserv> {
    return this.httpClient.get<ClientReserv>(`${this.baseURL}/${id}`);
  }

  add(matiere: ClientReserv): Observable<IClientReserv> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: ClientReserv): Observable<IClientReserv> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IClientReserv> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
