import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { from } from 'rxjs';
import { Category } from '../../dto/category.interface';
import { AddAdvertisementService } from '../../services/add-advertisement.service';

interface CustomTree {
  selectedId: number;
  data: Category[];
}

@Component({
  selector: 'az-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  currentCategory?: IdName;

  /**
   *
   */
  @Output()
  categoryIdChange = new EventEmitter<number | undefined>();

  /**
   *
   */
  @Input()
  categories?: Category[];

  /**
   *
   */
  customTree: CustomTree[] = [];

  /**
   *
   * @param $addAdvertisement
   */
  constructor(
    private $addAdvertisement: AddAdvertisementService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit() {
    if (this.categories) {
      this.initCustomTree(this.categories);
      return;
    }
    this.getReferences();
  }

  /**
   *
   */
  getReferences() {
    this.$addAdvertisement.getReferencesForCreate().subscribe((result) => {
      if (result.success) {
        this.categories = result.data.categories;
        this.initCustomTree(this.categories);
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   */
  private initCustomTree(categories: Category[]) {
    this.customTree = [];
    this.customTree.push({ selectedId: -1, data: categories });
  }

  /**
   *
   * @param category
   * @param tree
   * @returns
   */
  chooseCategory(category: Category, tree: CustomTree) {
    if (tree.selectedId > 0) {
      const a = [];
      for (const c of this.customTree) {
        a.push(c);
        if (c.selectedId === tree.selectedId) {
          c.selectedId = category.id;
          break;
        }
      }
      this.customTree = a;
    }
    tree.selectedId = category.id;
    if (category.child_categories.length === 0) {
      this.categoryIdChange.emit(category.id);
      this.form.controls['category_id'].setValue(category.id);
      return;
    }

    this.categoryIdChange.emit(undefined);
    this.form.controls['category_id'].setValue(undefined);
    this.customTree.push({ selectedId: -1, data: category.child_categories });
  }
}
