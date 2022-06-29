import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { CategoryTree } from 'projects/advertisement/src/app/shared/models/category-tree.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'az-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent implements OnInit {
  /**
   *
   */
  @Input()
  visibleMainCatalogue!: boolean;

  /**
   *
   */
  @Output()
  visibleMainCatalogueChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  visibleSecondaryCatalogue!: boolean;

  /**
   *
   */
  @Output()
  visibleSecondaryCatalogueChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  drawerWidthValue!: string;

  /**
   *
   */
  @Input()
  drawerWidthValueCatalog!: string;

  /**
   *
   */
  @Input()
  drawerOffsetValue!: number;

  /**
   *
   */
  isOpened = false;

  /**
   *
   */
  categoryTree$!: Observable<CategoryTree[]>;

  /**
   *
   */
  activeParentCategoryId!: number;

  /**
   *
   */
  childCategories?: CategoryTree[] = [];

  /**
   *
   */
  visibleCatalogueSecondaryLevelTwo = false;

  /**
   *
   */
  visibleCatalogueSecondaryLevelThree = false;

  /**
   *
   */
  categoryLevelTwo: CategoryTree = {} as CategoryTree;

  /**
   *
   */
  categoryLevelThree: CategoryTree = {} as CategoryTree;

  /**
   *
   * @param router
   * @param $category
   */
  constructor(private router: Router, private $category: CategoryService) {}

  /**
   *
   */
  private getCategories() {
    this.categoryTree$ = this.$category.getAllAsTree().pipe(
      map((categories) => {
        if (categories.length) {
          this.makeSequence(categories);
        }

        return categories;
      })
    );
  }

  /**
   *
   * @param categories
   * @param previousSequence
   */
  private makeSequence(categories: CategoryTree[], previousSequence = '') {
    categories.forEach((category) => {
      category.sequence = previousSequence + category.id;
      if (category.child_categories?.length) {
        this.makeSequence(
          category.child_categories,
          category.sequence + AdvertisementConstants.SPLITTER_CATEGORY_ID
        );
      }
    });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getCategories();
  }

  /**
   *
   * @param sequence
   */
  navigateByCategory(sequence: string) {
    this.closeMainCatalogue();
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      sequence,
    ]);
  }

  /**
   *
   */
  closeCatalogueSecondaryLevelTwo() {
    this.visibleCatalogueSecondaryLevelTwo = false;
  }

  /**
   *
   */
  closeCatalogueSecondaryLevelThree() {
    this.visibleCatalogueSecondaryLevelThree = false;
  }

  /**
   *
   */
  closeMainCatalogue() {
    this.visibleMainCatalogueChange.emit(false);
    this.isOpened = false;
  }

  /**
   *
   */
  closeSecondaryCatalogue(): void {
    this.visibleSecondaryCatalogueChange.emit(false);
    this.closeCatalogueSecondaryLevelTwo();
    this.closeCatalogueSecondaryLevelThree();
  }

  /**
   *
   * @param category
   */
  setChildCategories(category: CategoryTree) {
    this.isOpened = true;
    this.childCategories = category.child_categories;
  }

  /**
   *
   * @param id
   */
  openSubmenu(id: number) {
    this.isOpened = true;
    this.activeParentCategoryId = id;
  }

  /**
   *
   * @param category
   */
  openSecondaryCatalogLevelTwo(category: CategoryTree) {
    this.visibleCatalogueSecondaryLevelTwo = true;
    this.categoryLevelTwo = category;
  }

  /**
   *
   * @param subcategory
   */
  openSecondaryCatalogLevelThree(subcategory: CategoryTree) {
    this.categoryLevelThree = subcategory;
    this.visibleCatalogueSecondaryLevelThree = true;
  }
}
