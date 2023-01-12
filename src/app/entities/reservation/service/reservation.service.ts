import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseURL = 'http://localhost:4900/reservations';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IReservation[]> {
    return this.httpClient.get<IReservation[]>(`${this.baseURL}`);
  }
  listByTerrain(id : number): Observable<IReservation[]> {
    return this.httpClient.get<IReservation[]>(`${this.baseURL}/terrain/${id}`);
  }
  availableTeam(id? : number): Observable<IReservation[]> {
    if(id===undefined) {
      return this.httpClient.get<IReservation[]>(`${this.baseURL}/join`);
    }else{
      return this.httpClient.get<IReservation[]>(`${this.baseURL}/join/${id}`);
    }
  }
  assoc(id: number , nbrjoueur : number , idc : number): Observable<IReservation[]> {
    return this.httpClient.post<IReservation[]>(`${this.baseURL}/gg`, {
      id,
      nbrjoueur,
      idc
    });
  }

  listByClub(id : number): Observable<IReservation[]> {
    return this.httpClient.get<IReservation[]>(`${this.baseURL}/club/${id}`);
  }

  find(id: number): Observable<IReservation> {
    return this.httpClient.get<IReservation>(`${this.baseURL}/${id}`);
  }
  

  add(matiere: IReservation): Observable<IReservation> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id?: number, club?: IReservation): Observable<IReservation> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<IReservation> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
