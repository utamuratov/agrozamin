import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoryResponse } from '../../../dto/category/ozimizniki/interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OzimiznikiCategoryService {
  private url = 'http://localhost:4201/api/v1/admin/category';
  constructor(private http: HttpClient) {}

  get(projectId: number): Observable<CategoryResponse> {
    const params = new HttpParams().set('project_id', `${projectId}`);
    return this.http.get<CategoryResponse>(this.url, { params });
  }
}
