import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from '../models/article';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OtherCategoriesService {
  articlesUrl:string = "/api/articles/journals";
  constructor(private http:HttpClient) { }

  getCategories():Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }
}
