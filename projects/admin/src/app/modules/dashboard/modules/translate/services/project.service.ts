import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable()
export class ProjectService {
  constructor(private $baseService: BaseService) {}

  getProjects(): Observable<BaseResponse<Project[]>> {
    return this.$baseService.get<Project[]>('admin/project');
  }
}
