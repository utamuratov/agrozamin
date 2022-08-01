import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttachModerator,
  BlockUser,
  CreateUser,
  ResponseSettings,
  UserResponse,
} from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AgroIdUsersService {
  /**
   *
   */
  private url = 'http://localhost:4201/api/v1/admin/user';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @param pageIndex
   * @param pageSize
   * @param sortField
   * @param sortOrder
   * @param searchBy
   * @param searchText
   * @param moderator
   * @param blocked
   * @returns
   */
  get(
    resSettings: ResponseSettings
  ): Observable<UserResponse> {
    const params = new HttpParams()
      .append('page', `${resSettings.pageIndex}`)
      .append('per_page', `${resSettings.pageSize}`)
      .append('sort_by', `${resSettings.sortField ?? ''}`)
      .append('order_by', `${resSettings.sortOrder?.replace('end', '') ?? ''}`)
      .append('search_by', `${resSettings.searchBy}`)
      .append('search_text', `${resSettings.searchText ?? ''}`)
      .append('moderator', `${resSettings.moderator ?? ''}`)
      .append('blocked', `${resSettings.blocked ?? ''}`);

    return this.http.get<UserResponse>(`${this.url}/agroid`, { params });
  }

  /**
   *
   * @param user
   * @returns
   */
  add(user: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(`${this.url}`, user);
  }

  /**
   *
   * @param user
   * @param id
   * @returns
   */
  edit(user: CreateUser, id: number): Observable<CreateUser> {
    return this.http.put<CreateUser>(`${this.url}/${id}`, user);
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  /**
   *
   * @param body
   * @returns
   */
  block(body: BlockUser): Observable<BlockUser> {
    return this.http.post<BlockUser>(`${this.url}/block`, body);
  }

  /**
   *
   * @param role
   * @returns
   */
  getRolesList(role: number): Observable<UserResponse> {
    const params = new HttpParams().append('role', `${role}`);
    return this.http.get<UserResponse>(`${this.url}`, { params });
  }

  /**
   *
   * @param body
   * @returns
   */
  attachModerator(body: AttachModerator): Observable<AttachModerator> {
    return this.http.post<AttachModerator>(
      `${this.url}/attach-to-moderator`,
      body
    );
  }
}
