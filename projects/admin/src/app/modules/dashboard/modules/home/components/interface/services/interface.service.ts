import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceRequest } from '../../../dto/interface/interface-request.interface';
import { ProjectList } from '../../../dto/interface/project-list.interface';
import { ProjectListResponse } from '../../../dto/interface/project-response.interface';
import { TranslateList } from '../../../dto/interface/translate-list.interface';
import { InterfaceResponse } from '../../../dto/interface/translate-response.interface';

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {
  /**
   *
   */
  url = 'api/v1/admin/translate';

  /**
   *
   */
  projectsUrl = 'api/v1/admin/project';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getProjects(): Observable<ProjectListResponse> {
    return this.http.get<ProjectListResponse>(`${this.projectsUrl}`);
  }

  /**
   *
   * @returns
   */
  getAll(): Observable<InterfaceResponse> {
    return this.http.get<InterfaceResponse>(`${this.url}?type=1`);
  }

  /**
   *
   * @param id
   * @returns
   */
  getById(id: number): Observable<TranslateList> {
    return this.http.get<TranslateList>(`${this.url}/${id}`);
  }

  /**
   *
   * @param body
   * @returns
   */
  add(body: InterfaceRequest): Observable<InterfaceRequest> {
    return this.http.post<InterfaceRequest>(`${this.url}`, body);
  }

  /**
   *
   * @param id
   * @param body
   * @returns
   */
  edit(id: number, body: InterfaceRequest): Observable<InterfaceRequest> {
    return this.http.put<InterfaceRequest>(`${this.url}/${id}`, body);
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
