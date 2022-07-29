import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AgroIdUsersService {
  private url = 'http://localhost:4201/api/v1/admin/user/agroid';

  constructor(private http: HttpClient) {}

  get(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    searchBy: string,
    searchText: string | null
  ): Observable<UserResponse> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('per_page', `${pageSize}`)
      .append('sort_by', `${sortField ?? ''}`)
      .append('order_by', `${sortOrder?.replace('end', '') ?? ''}`)
      .append('search_by', `${searchBy}`)
      .append('search_text', `${searchText ?? ''}`);

    return this.http.get<UserResponse>(`${this.url}`, { params });
  }
}






























// export interface RandomUser {
//   id: number;
//   gender: string;
//   email: string;
//   name: {
//     title: string;
//     first: string;
//     last: string;
//   };
// }

// randomUserUrl = 'https://api.randomuser.me/';
// getUsers(
//   pageIndex: number,
//   pageSize: number,
//   sortField: string | null,
//   sortOrder: string | null,
//   filters: Array<{ key: string; value: string[] }>
// ): Observable<{ results: RandomUser[] }> {
//   let params = new HttpParams()
//     .append('page', `${pageIndex}`)
//     .append('results', `${pageSize}`)
//     .append('sortField', `${sortField}`)
//     .append('sortOrder', `${sortOrder}`);

//   filters.forEach((filter) => {
//     filter.value.forEach((value) => {
//       params = params.append(filter.key, value);
//     });
//   });

//   return this.http
//     .get<{ results: RandomUser[] }>(`${this.randomUserUrl}`, { params })
//     .pipe(catchError(() => of({ results: [] })));
// }
