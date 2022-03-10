import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { BaseResponse, Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil, tap } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { AddTranslationComponent } from '../components/add-translation/add-translation.component';
import { GridModel } from '../models/grid-model';
import { Project } from '../models/project.interface';
import { Translation } from '../models/translation.interface';
import { ProjectService } from '../services/project.service';
import { TranslateApiService } from '../services/translate-api.service';

const PAGE_SIZE = 15;
const FIRST_PAGE = 1;

@Component({
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.less'],
})
export class TranslationComponent implements OnInit {
  /**
   *
   */
  data!: GridModel<Translation>;

  /**
   *
   */
  innerHeight = window.innerHeight;

  /**
   *
   */
  isFirstTime = true;

  /**
   *
   */
  projects!: Project[];

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

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
    private destroy$: NgDestroy
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
        this.initTranslations();
      });
  }

  /**
   *
   */
  private initTranslations() {
    this.isFirstTime = true;
    this.getTranslations(FIRST_PAGE, PAGE_SIZE);
  }

  /**
   *
   */
  getTranslations(pageIndex: number, pageSize: number) {
    this.$translate
      .getTranslations(this.translationType, pageIndex, pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe((w) => {
        if (w.success) {
          this.data = w.data;
        }
      });
  }

  /**
   *
   * @param params
   * @returns
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    if (this.isFirstTime) {
      this.isFirstTime = false;
      return;
    }
    const { pageSize, pageIndex } = params;
    this.getTranslations(pageIndex, pageSize);
  }

  /**
   *
   */
  modifiedTranslation() {
    this.initTranslations();
  }

  /**
   *
   * @returns
   */
  getProjects(): Observable<BaseResponse<Project[]>> {
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
          this.initTranslations();
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
  search(searchText: string) {
    console.log(searchText);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerHeight = event.target.innerHeight;
  }
}
