import { Component, OnInit } from '@angular/core';
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
  categories!: Category[];

  /**
   *
   */
  customTree: CustomTree[] = [];

  constructor(private $addAdvertisement: AddAdvertisementService) {}

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

  chooseCategory(category: Category, tree: CustomTree) {
    tree.selectedId = category.id;
    if (category.child_categories.length === 0) {
      return;
    }

    this.customTree.push({ selectedId: -1, data: category.child_categories });
  }
}
