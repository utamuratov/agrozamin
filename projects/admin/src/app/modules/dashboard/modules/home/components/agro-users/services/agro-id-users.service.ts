import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttachModerator,
  BlockUser,
  CreateUser,
  User,
  UserResponse,
} from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AgroIdUsersService {
  private url = 'http://localhost:4201/api/v1/admin/user';

  constructor(private http: HttpClient) {}

  get(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    searchBy: string,
    searchText: string | null,
  ): Observable<UserResponse> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('per_page', `${pageSize}`)
      .append('sort_by', `${sortField ?? ''}`)
      .append('order_by', `${sortOrder?.replace('end', '') ?? ''}`)
      .append('search_by', `${searchBy}`)
      .append('search_text', `${searchText ?? ''}`)

    return this.http.get<UserResponse>(`${this.url}/agroid`, { params });
  }

  add(user: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(`${this.url}`, user);
  }

  edit(user: CreateUser, id: number): Observable<CreateUser> {
    return this.http.put<CreateUser>(`${this.url}/${id}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  block(body: BlockUser): Observable<BlockUser> {
    return this.http.post<BlockUser>(`${this.url}/block`, body);
  }

  getRolesList(role: number): Observable<UserResponse> {
    const params = new HttpParams().append('role', `${role}`);
    return this.http.get<UserResponse>(`${this.url}`, { params });
  }

  attachModerator(body: AttachModerator): Observable<AttachModerator> {
    return this.http.post<AttachModerator>(
      `${this.url}/attach-to-moderator`,
      body
    );
  }
}
