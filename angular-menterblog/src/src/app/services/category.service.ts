import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../models/category';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesUrl:string = "/api/categories";
  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
