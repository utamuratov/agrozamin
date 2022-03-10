import { KeyValue } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { BaseResponse, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil, tap } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { AddTranslationRequest } from '../models/add-translation.request';
import { GridModel } from '../models/grid-model';
import { Project } from '../models/project.interface';
import { MyTranslation, Translation } from '../models/translation.interface';
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
  expandSet = new Set<number>();

  /**
   *
   */
  data!: GridModel<MyTranslation>;

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
  disabled = false;

  /**
   *
   */
  projects!: Project[];

  /**
   *
   */
  translationType!: TranslationType;

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
    this.translationType =
      TranslationType[
        route.snapshot.url[0].path as keyof typeof TranslationType
      ];
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
          this.data = {
            ...w.data,
            data: w.data.data.map((translation) => {
              return {
                ...translation,
                transferItems: this.makeTransferItems(translation.projects),
                textKeyValue: this.convertToKeyValueArray(translation.text),
              };
            }),
          };
        }
      });
  }

  /**
   *
   * @param translation
   * @returns
   */
  private convertToKeyValueArray(text: NzSafeAny): KeyValue<string, string>[] {
    return Object.keys(text).map((key) => {
      return { key, value: text[key] };
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
   * @param isAdded
   */
  addedTranslation(isAdded: boolean) {
    if (isAdded) {
      this.initTranslations();
    }
  }

  /**
   *
   * @param projects
   * @returns
   */
  makeTransferItems(projects: Project[]): TransferItem[] {
    return this.projects.map((project) => {
      return {
        key: project.id,
        title: project.name,
        direction: projects.find((w) => w.id === project.id) ? 'right' : 'left',
      };
    });
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
   * @param id
   * @param checked
   */
  onExpandChange(id: number, checked: boolean): void {
    this.expandSet = new Set<number>();
    if (checked) {
      this.expandSet.add(id);
    }
  }

  /**
   *
   * @param value
   * @param key
   * @param data
   * @returns
   */
  changedTranslation(value: string, key: string, data: MyTranslation) {
    if (data.text[key] === value) {
      return;
    }

    const request = this.getRequestForChangedTranslation(data, key, value);

    this.editTranslation(data.id, request).subscribe((response) => {
      if (response.success) {
        data.text = request.text;
        return;
      }

      data.textKeyValue = this.convertToKeyValueArray(data.text);
    });
  }

  /**
   *
   * @param data
   * @param key
   * @param value
   * @returns
   */
  private getRequestForChangedTranslation(
    data: MyTranslation,
    key: string,
    value: string
  ) {
    const request: AddTranslationRequest = {
      key: data.key,
      project: data.projects.map((v) => v.id),
      type: data.type,
      text: {},
    };

    data.textKeyValue.forEach((language) => {
      request.text[language.key] = language.value;
    });
    request.text[key] = value;
    return request;
  }

  /**
   *
   * @param data
   */
  changedProjects(data: MyTranslation) {
    const request = this.getRequestForChangedProjects(data);
    this.editTranslation(data.id, request).subscribe((response) => {
      if (response.success) {
        data.projects = this.getProjectsByIds(request.project);
        return;
      }

      data.transferItems = this.makeTransferItems(data.projects);
    });
  }

  /**
   *
   * @param ids
   * @returns
   */
  getProjectsByIds(ids: number[]) {
    return this.projects.filter((w) => ids.indexOf(w.id) >= 0);
  }

  /**
   *
   * @param key
   * @param data
   * @returns
   */
  changedKey(changedKeyValue: string, data: MyTranslation) {
    const previousKeyValue = data.key;
    if (data.key === changedKeyValue) {
      return;
    }
    const request = this.getRequestForChangedKey(changedKeyValue, data);
    this.editTranslation(data.id, request).subscribe((response) => {
      if (response.success) {
        data.key = request.key;
        return;
      }

      data.key = previousKeyValue;
    });
  }

  /**
   *
   * @param id
   * @param request
   */
  private editTranslation(
    id: number,
    request: AddTranslationRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$translate
      .editTranslation(id, request)
      .pipe(takeUntil(this.destroy$));
  }

  /**
   *
   * @param key
   * @param data
   * @returns
   */
  private getRequestForChangedKey(
    key: string,
    data: MyTranslation
  ): AddTranslationRequest {
    return {
      key: key,
      project: this.makeIds(data),
      type: data.type,
      text: data.text,
    };
  }

  /**
   *
   * @param data
   * @returns
   */
  private makeIds(data: MyTranslation): number[] {
    return data.projects.map((v) => v.id);
  }

  /**
   *
   * @param data
   * @returns
   */
  private getRequestForChangedProjects(
    data: MyTranslation
  ): AddTranslationRequest {
    return {
      key: data.key,
      project: data.transferItems
        .filter((w) => w.direction === 'right')
        .map((w) => w['key']),
      type: data.type,
      text: data.text,
    };
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerHeight = event.target.innerHeight;
  }
}
