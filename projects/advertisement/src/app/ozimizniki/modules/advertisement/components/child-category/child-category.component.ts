import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'az-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildCategoryComponent implements OnInit {
  /**
   *
   */
  category$!: Observable<Category[]>;

  private _categoryId!: number;
  public get categoryId(): number {
    return this._categoryId;
  }
  @Input()
  public set categoryId(v: number | undefined) {
    if (v) {
      this._categoryId = v;
      this.getCategoryByCategoryId(this.categoryId);
    }
  }

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private $category: CategoryService
  ) {}

  ngOnInit() {
    // TODO: REMOVE
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getCategoryByCategoryId(categoryId: number) {
    this.category$ = this.$category.getAll(categoryId);
  }
}
