import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, LanguageState, NgDestroy } from 'ngx-az-core';
import { map, Observable, takeUntil, tap } from 'rxjs';
import { innerHeight$ } from '../../../components/app/app.component';
import { TranslationType } from '../../../core/enums/translation-type.enum';
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
  data!: Translation[];

  /**
   *
   */
  filteredData: Translation[] = [];

  /**
   *
   */
  innerHeight$ = innerHeight$;

  /**
   *
   */
  projects!: Project[];

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
      .subscribe((w) => {
        if (w.success) {
          this.data = w.data;
          this.filteredData = this.data;
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
      .deleteTranslation(id)
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
  addEdit(
    modal: AddTranslationComponent,
    editingData: Translation | null = null
  ) {
    modal.projects = this.projects;
    modal.editingData = editingData;
    modal.onInit();
    modal.isVisible = true;
  }

  /**
   *
   */
  sortByKey = (a: Translation, b: Translation) => a.key.localeCompare(b.key);

  /**
   *
   * Search by key and translations
   */
  search(searchText: string) {
    if (searchText.length === 0) {
      this.filteredData = this.data;
      return;
    }

    if (searchText.length < 3) {
      return;
    }

    this.filteredData = this.data.filter(
      (w) =>
        w.key.includes(searchText) ||
        Object.keys(w.text).find((t) => w.text[t].includes(searchText))
    );
  }

  /**
   *
   */
  clearSearch(searchInput: HTMLInputElement) {
    searchInput.value = '';
    this.filteredData = this.data;
  }
}
