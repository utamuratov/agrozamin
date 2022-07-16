import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map } from 'rxjs';
import { ComplaintReuqest } from '../dto/complaint.request.interface';
import { ComplaintCategoryResponse } from '../dto/complaint.response';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param model
   * @returns
   */
  complaint(model: ComplaintReuqest) {
    return this.$base.post('cabinet/announcement/complaint', model);
  }

  /**
   *
   * @returns
   */
  getComplaintCategories() {
    return this.$base
      .get<ComplaintCategoryResponse[]>('cabinet/complaint-category/list')
      .pipe(map((result) => result.data));
  }
}
