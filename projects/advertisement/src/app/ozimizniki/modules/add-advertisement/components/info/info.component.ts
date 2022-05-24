import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  @Output()
  categoryIdChange = new EventEmitter<number>();

  /**
   *
   */
  categories!: Category[];

  /**
   *
   */
  customTree: CustomTree[] = [];

  /**
   *
   * @param $addAdvertisement
   */
  constructor(private $addAdvertisement: AddAdvertisementService) {}

  /**
   *
   */
  ngOnInit() {
    this.getReferences();
  }

  /**
   *
   */
  getReferences() {
    this.$addAdvertisement.getReferencesForCreate().subscribe((result) => {
      if (result.success) {
        this.categories = result.data.categories;
        this.customTree.push({ selectedId: -1, data: this.categories });
      }
    });
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
