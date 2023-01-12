import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICommentaire } from '../commentaire.model';

@Injectable({
  providedIn: 'root',
})
export class CommentaireService {
  subjectNotifier: Subject<null> = new Subject<null>();
  private baseURL = 'http://localhost:4900/commentaires';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ICommentaire[]> {
    return this.httpClient.get<ICommentaire[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<ICommentaire[]> {
    return this.httpClient.get<ICommentaire[]>(`${this.baseURL}/form/${id}`);
  }

  add(matiere: ICommentaire): Observable<ICommentaire> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: ICommentaire): Observable<ICommentaire> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<ICommentaire> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }
}
