import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'az-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildCategoryComponent implements OnInit {
  @Input()
  category$!: Observable<Category[]>;
  @Output() subcategory = new EventEmitter<number>();
  id = 1;
  constructor(private location: Location) {}

  ngOnInit() {}

  handleCategory(id: number) {
    this.id = id;
    this.subcategory.emit(this.id);
  }

  back() {
    this.location.back();
  }
}
