import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, LanguageState, NgDestroy } from 'ngx-az-core';
import { map, Observable, takeUntil, tap } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { AddTranslationComponent } from '../components/add-translation/add-translation.component';
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
  projects?: Project[];

  /**
   *
   */
  editingData?: Translation;

  /**
   *
   */
  language$!: Observable<
    {
      code: string;
      name: string;
      sortFn: NzSafeAny;
    }[]
  >;

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
   */
  sortByKey = (a: Translation, b: Translation) => a.key.localeCompare(b.key);

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

    this.addSortingFunctionToLanguage();
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
  private addSortingFunctionToLanguage() {
    this.language$ = this.$store.select(LanguageState.languages).pipe(
      map((languages) => {
        return languages.map((language) => {
          return {
            ...language,
            sortFn: (a: Translation, b: Translation) =>
              a.text[language.code].localeCompare(
                b.text[language.code]
              ) as boolean,
          };
        });
      })
    );
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
