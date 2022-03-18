import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { map, Observable, takeUntil, tap } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Project } from '../models/project.interface';
import { Translation } from '../models/translation.interface';
import { ProjectService } from '../services/project.service';
import { TranslateApiService } from '../services/translate-api.service';

@Component({
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.less'],
})
export class TranslationComponent implements OnInit {
  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<Translation> = {
    data: [],
    filteredData: [],
    keys: ['key', 'text'],
    searchText: '',
  };

  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  projects: Project[] = [];

  /**
   *
   */
  editingData?: Translation;

  /**
   *
   */
  translationType!: TranslationType;

  /**
   *
   */
  TranslationType = TranslationType;

  /**
   *
   */
  model!: Translation;

  /**
   *
   * @param $translate
   * @param notification
   * @param $project
   */
  constructor(
    private route: ActivatedRoute,
    private $translate: TranslateApiService,
    private $project: ProjectService,
    private destroy$: NgDestroy,
    private $store: Store
  ) {
    const path = route.snapshot.url[0].path;
    this.translationType =
      TranslationType[path as keyof typeof TranslationType];
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getTranslations();
      });
  }

  /**
   *
   */
  getTranslations() {
    this.$translate
      .getTranslations(this.translationType)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
        }
      });
  }

  /**
   *
   */
  modifiedTranslation() {
    this.getTranslations();
  }

  /**
   *
   * @returns
   */
  private getProjects(): Observable<BaseResponse<Project[]>> {
    return this.$project.getProjects().pipe(
      tap((result) => {
        if (result.success) {
          this.projects = result.data;
        }
      })
    );
  }

  /**
   *
   */
  delete(id: number) {
    this.$translate
      .delete(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        if (response.success) {
          this.getTranslations();
        }
      });
  }

  /**
   *
   */
  addEdit(editingData?: Translation) {
    this.editingData = editingData;
    this.isVisible = true;
  }
}
