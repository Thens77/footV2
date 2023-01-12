import { Injectable } from '@angular/core';
import { Article, IArticle, NewArticle } from '../article.model';
import { HttpClient, HttpResponse } from '@angular/common/http';  
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseURL = 'http://localhost:4900/articles';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<IArticle[]> {
    return this.httpClient.get<IArticle[]>(`${this.baseURL}`);
  }

  listForFormation(id: number): Observable<IArticle[]> {
    return this.httpClient.get<IArticle[]>(`${this.baseURL}/form/${id}`);
  }

  notinlist(id: number): Observable<IArticle[]> {
    return this.httpClient.get<IArticle[]>(`${this.baseURL}/nform/${id}`);
  }

  add(matiere: IArticle): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }

  get(id: number): Observable<IArticle> {
    return this.httpClient.get<IArticle>(`${this.baseURL}/${id}`);
  }
  update(id: number, matiere: IArticle): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, matiere);
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
