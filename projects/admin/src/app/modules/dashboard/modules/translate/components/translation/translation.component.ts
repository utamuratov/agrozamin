import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { BaseResponse, Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil, tap } from 'rxjs';
import { Project } from '../../models/project.interface';
import { Translation } from '../../models/translation.interface';
import { ProjectService } from '../../services/project.service';
import { TranslateApiService } from '../../services/translate-api.service';

@Component({
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
   */
  columns: Column[] = [];

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
    private cd: ChangeDetectorRef
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
          this.makeColumnsForGrid();
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   */
  makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'key',
          sortable: true,
          width: '200px',
          nzLeft: true,
        }),
      ];
      languages.forEach((language) => {
        this.columns.push(
          new Column({
            field: 'text.' + language.code,
            header: language.name,
            sortable: true,
          })
        );
      });
      this.columns.push(
        new Column({
          field: 'projects',
          width: '200px',
          nzRight: true,
          hasTemplate: true,
        })
      );
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
