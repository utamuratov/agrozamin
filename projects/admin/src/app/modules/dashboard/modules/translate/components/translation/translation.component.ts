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
          this.cd.markForCheck();
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