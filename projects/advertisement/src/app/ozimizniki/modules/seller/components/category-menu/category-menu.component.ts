import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Category } from '../../dto/category.interface';

@Component({
  selector: 'az-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryMenuComponent {
  /**
   *
   */
  @Input()
  categories!: Category[];

  /**
   *
   */
  categoryId!: number;

  /**
   *
   */
  @Output()
  categoryIdChange = new EventEmitter<number>();

  /**
   *
   * @param categoryId
   */
  handleCategory(categoryId: number) {
    this.categoryIdChange.emit(categoryId);
  }
}
